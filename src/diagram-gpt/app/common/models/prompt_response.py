from pydantic import BaseModel


class PromptResponse(BaseModel):
    prompt: str