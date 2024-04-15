from pydantic import BaseModel


class GenerateUrlResponse(BaseModel):
    url: str