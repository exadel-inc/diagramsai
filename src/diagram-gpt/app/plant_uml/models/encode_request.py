from pydantic import BaseModel


class EncodeRequest(BaseModel):
    text: str
