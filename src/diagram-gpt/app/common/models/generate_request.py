from typing import Optional
from pydantic import BaseModel, Field, conlist


class GenerateRequest(BaseModel):
    openai_api_key: str = Field(alias="openaiApiKey")
    text: conlist(str, min_length=1)
    diagram_code: Optional[str] = Field(None, alias="diagramCode")
