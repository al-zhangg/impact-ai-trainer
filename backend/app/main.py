from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import openai
import os

app = FastAPI()

# Enable CORS so your React frontend can communicate with this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend URL here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load OpenAI API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_summary(text: str) -> str:
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Summarize this document chunk in plain language:\n\n{text}",
        max_tokens=150,
        temperature=0.7,
    )
    return response.choices[0].text.strip()

@app.get("/")
async def root():
    return {"message": "Impact AI Trainer API is running"}

@app.post("/upload/")
async def upload_document(file: UploadFile = File(...)):
    contents = await file.read()
    text = contents.decode("utf-8", errors="ignore")  # decode the file to text

    # Split the text into chunks of 500 characters
    chunk_size = 500
    chunks = [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]

    # Generate summaries for each chunk using OpenAI
    summaries = [generate_summary(chunk) for chunk in chunks]

    return {
        "filename": file.filename,
        "chunks": len(chunks),
        "summaries": summaries,
    }

