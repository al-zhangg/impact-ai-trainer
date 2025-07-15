from pydantic import BaseModel, Field
from typing import Optional

class Document(BaseModel):
    title: str
    file_url: str
    file_type: str
    status: Optional[str] = Field("uploading")
    total_chunks: Optional[int] = None
    processed_chunks: Optional[int] = 0
    error_message: Optional[str] = None

class ContentChunk(BaseModel):
    document_id: str
    chunk_index: int
    original_text: str
    summary: Optional[str] = None
    training_script: Optional[str] = None
    video_url: Optional[str] = None
    word_count: Optional[int] = None
    estimated_duration: Optional[str] = None
