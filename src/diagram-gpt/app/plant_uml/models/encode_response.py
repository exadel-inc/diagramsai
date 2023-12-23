from pydantic import BaseModel


class EncodeResponse(BaseModel):
    encoded: str
