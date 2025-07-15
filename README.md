# Impact AI Trainer

This repository contains the **Impact AI Trainer** project, a platform to transform internal documents into AI-generated training materials.

## Structure

- **frontend/** - React app with UI components for file upload, instructions, and navigation.
- **backend/** - FastAPI backend for API endpoints and processing logic.
- **schemas/** - JSON schemas defining the data models `Document` and `ContentChunk`.

## Running Locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Deployment

- Frontend can be deployed on **Vercel** (static React app).
- Backend can be deployed on platforms like **Railway**, **Heroku**, or **Vercel Serverless Functions** (if adapted).

## Notes

- Make sure to set environment variables and storage for uploaded files.
- Further integration is needed to connect frontend upload actions with backend processing.
