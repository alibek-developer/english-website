import { createClerkClient, verifyToken } from "@clerk/backend";
import { Header, APIError, Gateway } from "encore.dev/api";
import { authHandler } from "encore.dev/auth";
import { secret } from "encore.dev/config";

// Prefer explicit env var in local/dev, fall back to Encore secret in cloud.
const encoreClerkSecret = secret("ClerkSecretKey");
const envClerkSecret = process.env.CLERK_SECRET_KEY;

const getClerkSecretKey = () => envClerkSecret || encoreClerkSecret();

const clerkClient = createClerkClient({ secretKey: getClerkSecretKey() });

interface AuthParams {
  authorization?: Header<"Authorization">;
}

export interface AuthData {
  userID: string;
  email: string | null;
}

export const auth = authHandler<AuthParams, AuthData>(
  async (data) => {
    const token = data.authorization?.replace("Bearer ", "");
    if (!token) {
      throw APIError.unauthenticated("missing token");
    }

    try {
      const verifiedToken = await verifyToken(token, {
        secretKey: getClerkSecretKey(),
      });

      const user = await clerkClient.users.getUser(verifiedToken.sub);
      return {
        userID: user.id,
        email: user.emailAddresses[0]?.emailAddress ?? null,
      };
    } catch (err) {
      throw APIError.unauthenticated("invalid token", err as Error);
    }
  }
);

export const gw = new Gateway({ authHandler: auth });
