# Deployment Guide - MERN Task Manager

This guide provides instructions for deploying the project to production.

## 1. Database Setup (MongoDB Atlas)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Get your connection string (Srv).
3. Whitelist IP `0.0.0.0/0` or use specific hosting IPs.

## 2. Backend Deployment (Render)
1. Sign up on [Render](https://render.com/).
2. Create a new **Web Service**.
3. Connect your GitHub repository.
4. Set **Root Directory** to `backend`.
5. **Build Command**: `npm install`
6. **Start Command**: `npm start`
7. Add Environment Variables:
   - `PORT`: `5000` (or leave empty for auto)
   - `MONGO_URI`: `your_mongodb_srv_string`
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: `https://your-app.vercel.app` (optional, for CORS)

## 3. Frontend Deployment (Vercel)
1. Sign up on [Vercel](https://vercel.com/).
2. Import your GitHub repository.
3. Select `frontend` as the **Root Directory**.
4. Framework Preset: **Vite**.
5. **Build Command**: `npm run build`
6. **Output Directory**: `dist`
7. Add Environment Variables:
   - `VITE_API_URL`: `https://your-backend.onrender.com`

---

## 4. Single Deployment (Heroku/Render)
Since the backend is configured to serve the frontend build from `frontend/dist`, you can deploy the entire project as one service:
1. Root directory: `./` (project root).
2. Build command: `npm install && npm run build --prefix frontend`
3. Start command: `npm start --prefix backend`

---

## Architecture Diagram

```text
[ Browser ] <--- HTTPS ---> [ Vercel (Frontend) ]
                                 |
                                 | REST API Call
                                 v
[ MongoDB Atlas ] <----- [ Render (Backend) ]
```
