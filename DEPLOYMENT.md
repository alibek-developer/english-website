# Deployment Guide

## Prerequisites

1. **Encore Cloud Account**: Sign up at https://app.encore.cloud
2. **Vercel Account**: Sign up at https://vercel.com
3. **Clerk Account**: Sign up at https://clerk.com
4. **Stripe Account**: Sign up at https://stripe.com

## Step 1: Backend Deployment (Encore Cloud)

### 1.1 Create Encore App

```bash
cd backend
encore auth login
encore app create english-teacher-course-site
```

### 1.2 Set Environment Secrets

Go to Encore Cloud Dashboard > Your App > Settings > Secrets and add:

- `StripeSecretKey`: Your Stripe secret key (from Stripe Dashboard)
- `StripeWebhookSecret`: Your Stripe webhook secret (will be created in Step 3)
- `FRONTEND_URL`: Your Vercel frontend URL (e.g., https://your-app.vercel.app)

### 1.3 Deploy Backend

```bash
git add -A
git commit -m "Initial deployment"
git push encore main
```

Or connect to GitHub and push to your repository.

### 1.4 Note Your Backend URL

After deployment, note your backend URL from Encore Cloud Dashboard (e.g., `https://staging-english-teacher-course-site.encr.app`)

## Step 2: Frontend Deployment (Vercel)

### 2.1 Connect GitHub Repository

1. Go to Vercel Dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 2.2 Set Environment Variables

In Vercel > Your Project > Settings > Environment Variables, add:

- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `VITE_BACKEND_URL`: Your Encore backend URL (from Step 1.4)

### 2.3 Deploy

Click "Deploy" and wait for the build to complete.

### 2.4 Note Your Frontend URL

After deployment, note your frontend URL (e.g., `https://your-app.vercel.app`)

## Step 3: Configure Stripe Webhook

### 3.1 Create Webhook Endpoint

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://staging-english-teacher-course-site.encr.app/webhooks/stripe`
4. Select events to send: `checkout.session.completed`
5. Click "Add endpoint"

### 3.2 Get Webhook Secret

1. Click on the newly created webhook endpoint
2. Click "Reveal" under "Signing secret"
3. Copy the secret (starts with `whsec_`)
4. Add it to Encore Cloud Dashboard as `StripeWebhookSecret`

### 3.3 Update Frontend URL in Encore

Go back to Encore Cloud Dashboard and update `FRONTEND_URL` with your actual Vercel URL.

## Step 4: Configure Clerk

### 4.1 Add Allowed Redirect URLs

In Clerk Dashboard > Your App > Paths:

- Add your Vercel URL to allowed redirect URLs
- Add `https://your-app.vercel.app/dashboard` to allowed redirect URLs after sign-in

### 4.2 Get Publishable Key

Copy your Clerk publishable key and ensure it's set in Vercel environment variables.

## Step 5: Test the Deployment

### 5.1 Test Course Listing

Visit `https://your-app.vercel.app/courses` and verify courses are loading.

### 5.2 Test Authentication

1. Click "Login" and sign in with Clerk
2. Verify you're redirected back to the app

### 5.3 Test Payment Flow

1. Go to a course page
2. Click "Xarid qilish" (Purchase)
3. Select a payment method
4. Complete the Stripe checkout
5. Verify you're redirected to success page
6. Check your dashboard to see the enrolled course

### 5.4 Test Admin Panel

1. Go to `https://your-app.vercel.app/admin`
2. Login with: `admin@alibek.uz` / `admin123`
3. Test adding courses, lessons, and homework
4. Verify dropdowns show all courses correctly

## Troubleshooting

### Database Migration Issues

If you see "relation does not exist" errors:

1. Go to Encore Cloud Dashboard > Your App > Infrastructure > Database
2. Click "Run migrations manually" if needed
3. Check migration logs for errors

### Stripe Webhook Not Working

1. Check Stripe Dashboard > Developers > Webhooks > Your endpoint
2. Click "Send test webhook" to verify connectivity
3. Check webhook secret is correctly set in Encore Cloud
4. Verify endpoint URL matches your backend URL

### CORS Issues

If you see CORS errors:

1. Verify `VITE_BACKEND_URL` in Vercel matches your Encore backend URL
2. Check that Encore backend is accessible from browser
3. Ensure API endpoints have `expose: true` in their configuration

### Environment Variables Not Loading

1. Redeploy frontend after adding environment variables
2. Verify variable names match exactly (case-sensitive)
3. Check Vercel deployment logs for environment variable issues

## Updating the Deployment

### Backend Updates

```bash
cd backend
git add -A
git commit -m "Update backend"
git push encore main
```

Or push to GitHub if connected.

### Frontend Updates

```bash
cd frontend
git add -A
git commit -m "Update frontend"
git push origin main
```

Vercel will automatically deploy on push.

## Monitoring

### Encore Cloud

- View API logs in Encore Cloud Dashboard > Your App > Observability
- Monitor database performance in Infrastructure > Database
- Check error rates and response times

### Vercel

- View deployment logs in Vercel Dashboard > Your Project > Deployments
- Monitor function execution and errors
- Check analytics for traffic patterns

## Production Checklist

- [ ] All environment variables set correctly
- [ ] Stripe webhook configured and tested
- [ ] Clerk authentication working
- [ ] Database migrations applied
- [ ] Admin panel accessible and functional
- [ ] Course enrollment and payment flow tested
- [ ] Student dashboard showing enrolled courses
- [ ] All modals and dropdowns working correctly
- [ ] Error handling and logging in place
- [ ] SSL certificates active (automatic on Vercel and Encore)
- [ ] Custom domain configured (optional)

## Support

For issues:
- Encore: https://encore.dev/docs
- Vercel: https://vercel.com/docs
- Clerk: https://clerk.com/docs
- Stripe: https://stripe.com/docs