from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Impact AI Trainer API is running"}
