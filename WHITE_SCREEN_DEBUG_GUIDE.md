# White Screen Debugging Guide

## 🔍 Root Cause Analysis

### Most Likely Causes (in order of probability):

1. **❌ Missing `VITE_CLERK_PUBLISHABLE_KEY`** (90% probability)
   - **Symptom**: White screen, console shows Clerk error
   - **Why**: `ClerkProvider` crashes if `publishableKey` is `undefined`
   - **Fix**: Set `VITE_CLERK_PUBLISHABLE_KEY` in `.env.development` or Vercel

2. **❌ Wrong `VITE_API_URL` format** (5% probability)
   - **Symptom**: Network errors, CORS errors
   - **Why**: Missing `http://` or `https://`, trailing slash, wrong port
   - **Fix**: Use exact format: `http://localhost:4000` or `https://your-app.encr.app`

3. **❌ Build/Bundle Error** (3% probability)
   - **Symptom**: Console shows module/import errors
   - **Why**: TypeScript errors, missing dependencies, broken imports
   - **Fix**: Run `npm run build` locally, check for errors

4. **❌ Vite Not Reading `.env`** (2% probability)
   - **Symptom**: All env vars show as `undefined` in console
   - **Why**: Wrong file name, wrong location, Vite cache
   - **Fix**: Ensure file is `frontend/.env.development`, restart dev server

---

## 🛠️ Step-by-Step Debugging Workflow

### Step 1: Check Browser Console (CRITICAL)

1. Open your app in browser
2. Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. Go to **Console** tab
4. Look for **RED errors**

**Common errors you'll see:**

```
❌ ClerkProvider: publishableKey is required
   → Missing VITE_CLERK_PUBLISHABLE_KEY

❌ Failed to fetch /admin/login
   → Wrong VITE_API_URL or backend not running

❌ Cannot read property 'X' of undefined
   → Component trying to use undefined env variable

❌ Uncaught SyntaxError: Unexpected token
   → Build error, check terminal where `npm run dev` is running
```

**What to do:**
- Copy the exact error message
- Check which file/line number it points to
- See solutions below for each error type

---

### Step 2: Check Network Tab

1. In DevTools, go to **Network** tab
2. Refresh the page (`F5`)
3. Look for **FAILED** requests (red)

**What to check:**

- **`index.html`** → Should return `200 OK`
  - If `404`: Vite dev server not running or wrong port
  - If `500`: Build error, check terminal

- **`main-[hash].js`** → Should return `200 OK`
  - If `404`: Build failed, check `npm run build` output
  - If `MIME type error`: Vite config issue

- **`/admin/login`** (if you try to login) → Should hit your backend
  - If `CORS error`: Backend CORS not configured for your frontend URL
  - If `404`: Backend not running or wrong `VITE_API_URL`
  - If `405`: Wrong HTTP method or backend route issue

---

### Step 3: Validate Environment Variables

#### 3.1 Check if Vite is reading your `.env` file

Add this temporarily to `frontend/src/App.tsx` (before the return):

```tsx
console.log('🔍 Environment Check:', {
  VITE_CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ? '✅ Set' : '❌ Missing',
  VITE_API_URL: import.meta.env.VITE_API_URL || '❌ Missing',
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
})
```

**Expected output in console:**
```
🔍 Environment Check: {
  VITE_CLERK_PUBLISHABLE_KEY: "✅ Set",
  VITE_API_URL: "http://localhost:4000",
  MODE: "development",
  DEV: true,
  PROD: false
}
```

**If all show `❌ Missing`:**
- `.env.development` file doesn't exist or is in wrong location
- File must be: `frontend/.env.development` (not `frontend/src/.env.development`)
- Restart Vite dev server after creating/editing `.env` files

---

#### 3.2 Validate Each Variable Format

**✅ `VITE_CLERK_PUBLISHABLE_KEY`**
```env
# ✅ CORRECT
VITE_CLERK_PUBLISHABLE_KEY=pk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890

# ❌ WRONG (missing VITE_ prefix)
CLERK_PUBLISHABLE_KEY=pk_test_...

# ❌ WRONG (quotes not needed)
VITE_CLERK_PUBLISHABLE_KEY="pk_test_..."

# ❌ WRONG (spaces around =)
VITE_CLERK_PUBLISHABLE_KEY = pk_test_...
```

**✅ `VITE_API_URL`**
```env
# ✅ CORRECT (development)
VITE_API_URL=http://localhost:4000

# ✅ CORRECT (production)
VITE_API_URL=https://staging-english-teacher-course-site.encr.app

# ❌ WRONG (missing protocol)
VITE_API_URL=localhost:4000

# ❌ WRONG (trailing slash)
VITE_API_URL=http://localhost:4000/

# ❌ WRONG (wrong port)
VITE_API_URL=http://localhost:3000

# ❌ WRONG (quotes)
VITE_API_URL="http://localhost:4000"
```

---

### Step 4: Fix Common Mistakes

#### Mistake 1: Missing `VITE_` Prefix

**Problem:**
```env
# ❌ This won't work - Vite only exposes vars starting with VITE_
CLERK_PUBLISHABLE_KEY=pk_test_...
API_URL=http://localhost:4000
```

**Fix:**
```env
# ✅ Correct - all frontend env vars must start with VITE_
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_URL=http://localhost:4000
```

---

#### Mistake 2: Wrong File Location

**Problem:**
```
project/
  frontend/
    src/
      .env.development  ❌ WRONG LOCATION
```

**Fix:**
```
project/
  frontend/
    .env.development  ✅ CORRECT LOCATION
    src/
      App.tsx
```

---

#### Mistake 3: Not Restarting Dev Server

**Problem:**
- Edited `.env.development`
- Variables still show as `undefined`

**Fix:**
1. Stop Vite dev server (`Ctrl+C`)
2. Delete `.vite` cache folder: `rm -rf frontend/.vite` (or delete manually)
3. Restart: `npm run dev`

---

#### Mistake 4: Wrong Backend URL Format

**Problem:**
```env
# ❌ Wrong formats
VITE_API_URL=localhost:4000
VITE_API_URL=http://localhost:4000/
VITE_API_URL=https://my-backend.encr.app/admin
```

**Fix:**
```env
# ✅ Correct - base URL only, no trailing slash, no paths
VITE_API_URL=http://localhost:4000
VITE_API_URL=https://staging-english-teacher-course-site.encr.app
```

---

#### Mistake 5: CORS Misconfiguration

**Problem:**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:4000`
- Error: `CORS policy: No 'Access-Control-Allow-Origin' header`

**Fix (Backend):**
Your Encore backend already has `expose: true` on endpoints, which handles CORS. But ensure:

1. Backend is running: `cd backend && encore run`
2. Backend URL matches `VITE_API_URL` exactly
3. Check Encore Cloud Dashboard → Your App → Settings → Secrets → `FRONTEND_URL` is set to your frontend URL

---

### Step 5: Verify Build Works

**Test local build:**

```bash
cd frontend
npm run build
```

**Expected output:**
```
✓ built in 2.5s
```

**If you see errors:**
- Fix TypeScript errors first
- Check for missing imports
- Ensure all dependencies installed: `npm install`

**Test production preview:**

```bash
npm run preview
```

- Open `http://localhost:4173`
- Check console for errors
- Try admin login

---

### Step 6: Check Vercel Deployment (Production)

**If white screen in production:**

1. **Vercel Dashboard → Your Project → Deployments → Latest**
   - Check build logs for errors
   - Look for "Build failed" or red errors

2. **Vercel Dashboard → Settings → Environment Variables**
   - Verify all `VITE_*` variables are set
   - Check they match your `.env.production` values
   - **Important**: After adding/changing env vars, redeploy

3. **Check Vercel Function Logs**
   - Vercel Dashboard → Your Project → Functions
   - Look for runtime errors

4. **Test API URL**
   - In browser console on production site:
   ```js
   console.log('API URL:', import.meta.env.VITE_API_URL)
   ```
   - Should show your Encore backend URL, not `undefined`

---

## 🎯 Quick Fix Checklist

Run through this checklist in order:

- [ ] **1. Create `frontend/.env.development`** with `VITE_CLERK_PUBLISHABLE_KEY` and `VITE_API_URL`
- [ ] **2. Restart Vite dev server** (`Ctrl+C`, then `npm run dev`)
- [ ] **3. Check browser console** for specific error messages
- [ ] **4. Verify backend is running** (`cd backend && encore run`)
- [ ] **5. Test `http://localhost:5173`** - should show home page, not white screen
- [ ] **6. Test `http://localhost:5173/admin`** - should show login form
- [ ] **7. Check Network tab** - ensure no failed requests
- [ ] **8. If deploying to Vercel**: Set env vars in Vercel Dashboard, redeploy

---

## 📋 Environment Variable Reference

### Required Variables (Frontend)

| Variable | Development | Production | Format |
|----------|------------|------------|--------|
| `VITE_CLERK_PUBLISHABLE_KEY` | `pk_test_...` | `pk_live_...` | From Clerk Dashboard |
| `VITE_API_URL` | `http://localhost:4000` | `https://your-app.encr.app` | Your Encore backend URL |

### Optional Variables (Frontend)

| Variable | Purpose | Default |
|----------|---------|---------|
| `VITE_API_BASE_URL` | Legacy compatibility | Falls back to `VITE_API_URL` |
| `VITE_CLIENT_TARGET` | Legacy compatibility | Falls back to `VITE_API_URL` |

### Required Variables (Backend - Encore Cloud Secrets)

| Secret Name | Purpose | Format |
|-------------|---------|--------|
| `ClerkSecretKey` | Clerk backend auth | `sk_test_...` or `sk_live_...` |
| `StripeSecretKey` | Stripe payments | `sk_test_...` or `sk_live_...` |
| `StripeWebhookSecret` | Stripe webhooks | `whsec_...` |
| `FRONTEND_URL` | CORS whitelist | `https://your-frontend.vercel.app` |

---

## 🚨 Emergency Fix: If Still White Screen

If nothing above works, try this nuclear option:

1. **Delete all caches:**
   ```bash
   cd frontend
   rm -rf node_modules .vite dist
   npm install
   ```

2. **Create minimal `.env.development`:**
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
   VITE_API_URL=http://localhost:4000
   ```

3. **Restart everything:**
   ```bash
   # Terminal 1: Backend
   cd backend
   encore run

   # Terminal 2: Frontend
   cd frontend
   npm run dev
   ```

4. **Open browser to `http://localhost:5173`**
   - Should see home page
   - If still white, check console for exact error

---

## 📞 Still Not Working?

If you've tried everything above and still have a white screen:

1. **Copy the exact console error** (screenshot or text)
2. **Check terminal where `npm run dev` is running** - any errors there?
3. **Verify file structure:**
   ```
   frontend/
     .env.development  ← Must be here
     src/
       App.tsx
       main.tsx
   ```
4. **Check `frontend/index.html`** exists and has `<div id="root"></div>`

The most common issue is **missing `VITE_CLERK_PUBLISHABLE_KEY`** - ensure it's set correctly!

