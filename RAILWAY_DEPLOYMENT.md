# Railway Deployment Instructions

## Backend Deployment on Railway

### Step 1: Sign up for Railway
1. Go to https://railway.app
2. Sign up with GitHub (recommended)

### Step 2: Deploy the Backend
1. Click "New Project" → "Deploy from GitHub repo"
2. Select your `e-commerce-site` repository
3. Railway will auto-detect it's a Node.js app

### Step 3: Configure Environment Variables
In Railway dashboard, go to "Variables" tab and add:

```
NODE_ENV=production
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
```

**To get MongoDB URI:**
- Use MongoDB Atlas (free): https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string

### Step 4: Generate Railway Domain
1. Go to Settings → Domains
2. Click "Generate Domain" 
3. Copy your Railway URL (e.g., `your-app.up.railway.app`)

### Step 5: Update Vercel Frontend
Update `/vercel.json` to point to your Railway backend:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "frontend/build",
  "framework": null,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://your-app.up.railway.app/api/$1"
    },
    {
      "source": "/(.*)", 
      "destination": "/index.html"
    }
  ]
}
```

### Step 6: Deploy Frontend to Vercel
```bash
git add .
git commit -m "Update backend URL to Railway"
git push
```

Vercel will auto-deploy from your GitHub repo.

## Monitoring & Debugging

### Railway Logs
- Click on your project → "Logs" tab to see real-time logs
- Check for connection errors or missing env variables

### Test Your API
```bash
curl https://your-app.up.railway.app/api/products
```

### Common Issues
1. **CORS errors**: Backend should already have CORS configured
2. **Database connection**: Make sure MongoDB URI is correct
3. **502 errors**: Check Railway logs for crash details

## Costs
- Railway gives $5 free credit per month
- This should be enough for a portfolio project
- No cold starts unlike Render free tier!