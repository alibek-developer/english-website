# White Screen Fixes Applied

## ✅ Issues Fixed

### 1. **Critical: Undefined Clerk Key Protection**
   - **File**: `frontend/src/App.tsx`
   - **Problem**: If `VITE_CLERK_PUBLISHABLE_KEY` is undefined, `ClerkProvider` crashes → white screen
   - **Fix**: Added error boundary that shows helpful message instead of crashing
   - **Result**: App now shows error message instead of blank screen if Clerk key is missing

### 2. **Environment Variable Mismatch**
   - **Files**: `frontend/src/api/axios.ts`, `frontend/src/client.ts`
   - **Problem**: `axios.ts` used `VITE_API_URL`, `client.ts` used `VITE_API_BASE_URL` → inconsistency
   - **Fix**: Unified both to check `VITE_API_URL` first, then fallback to `VITE_API_BASE_URL` → `VITE_CLIENT_TARGET` → `Local`
   - **Result**: Both axios and Encore client now use same env variable resolution

### 3. **Missing Fallback in client.ts**
   - **File**: `frontend/src/client.ts`
   - **Problem**: If all env vars undefined, `ENCORE_BASE_URL` could be undefined
   - **Fix**: Added fallback to `Local` (`http://localhost:4000`)
   - **Result**: Always has a valid backend URL, even if env vars not set

### 4. **Added Debugging Warnings**
   - **File**: `frontend/src/api/axios.ts`
   - **Fix**: Console warning if no backend URL env var found
   - **Result**: Easier to diagnose missing env variables

---

## 📝 Required Actions

### Step 1: Create Environment Files

Create these files manually (they're gitignored):

**`frontend/.env.development`**
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
VITE_API_URL=http://localhost:4000
```

**`frontend/.env.production`** (for Vercel)
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_live_YOUR_KEY_HERE
VITE_API_URL=https://your-encore-backend.encr.app
```

### Step 2: Get Your Clerk Key

1. Go to https://dashboard.clerk.com
2. Select your app
3. Go to **API Keys**
4. Copy the **Publishable Key** (starts with `pk_test_` or `pk_live_`)
5. Paste it into `.env.development`

### Step 3: Restart Dev Server

```bash
cd frontend
# Stop current server (Ctrl+C)
npm run dev
```

### Step 4: Verify It Works

1. Open `http://localhost:5173`
2. Should see home page (not white screen)
3. Open browser console (F12)
4. Should see no red errors
5. Try `/admin` route - should show login form

---

## 🔍 Debugging Steps

If still seeing white screen:

1. **Check Browser Console** (F12 → Console tab)
   - Look for red errors
   - Most common: "ClerkProvider: publishableKey is required"

2. **Check Environment Variables**
   - Add this to `App.tsx` temporarily:
   ```tsx
   console.log('Env check:', {
     clerk: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ? 'SET' : 'MISSING',
     api: import.meta.env.VITE_API_URL || 'MISSING'
   })
   ```

3. **Check Network Tab** (F12 → Network)
   - Look for failed requests (red)
   - `index.html` should return 200 OK
   - `main-[hash].js` should return 200 OK

4. **Verify Backend Running**
   ```bash
   cd backend
   encore run
   ```
   - Should see: "API Base URL: http://localhost:4000"

5. **Check File Structure**
   ```
   frontend/
     .env.development  ← Must exist here
     src/
       App.tsx
       main.tsx
   ```

---

## 📋 Environment Variable Checklist

### Frontend (Vite) - Required

- [ ] `VITE_CLERK_PUBLISHABLE_KEY` - From Clerk Dashboard
- [ ] `VITE_API_URL` - Your Encore backend URL

### Frontend (Vite) - Optional (for compatibility)

- [ ] `VITE_API_BASE_URL` - Falls back to `VITE_API_URL`
- [ ] `VITE_CLIENT_TARGET` - Falls back to `VITE_API_URL`

### Backend (Encore Cloud Secrets)

- [ ] `ClerkSecretKey` - From Clerk Dashboard (secret key, not publishable)
- [ ] `StripeSecretKey` - From Stripe Dashboard
- [ ] `StripeWebhookSecret` - From Stripe Webhook
- [ ] `FRONTEND_URL` - Your Vercel frontend URL

---

## 🎯 Most Common Issue

**90% of white screen issues are caused by:**

❌ **Missing `VITE_CLERK_PUBLISHABLE_KEY`**

**Symptoms:**
- White screen
- Console error: "ClerkProvider: publishableKey is required"
- Or: "Cannot read property 'X' of undefined"

**Fix:**
1. Create `frontend/.env.development`
2. Add: `VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY`
3. Restart dev server

---

## 📚 Additional Resources

- Full debugging guide: See `WHITE_SCREEN_DEBUG_GUIDE.md`
- Vite env vars: https://vitejs.dev/guide/env-and-mode.html
- Clerk setup: https://clerk.com/docs
