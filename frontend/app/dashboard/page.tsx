import { DashboardPage } from "@/pages/DashboardPage";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPageRoute() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return <DashboardPage />;
}

