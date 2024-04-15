from typing import Optional
from pydantic import BaseModel, Field, conlist


class PromptRequest(BaseModel):
    text: conlist(str, min_length=1)
    diagram_code: Optional[str] = Field(None, alias="diagramCode")