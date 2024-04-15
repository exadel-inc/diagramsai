from pydantic import BaseModel, Field


class GenerateUrlRequest(BaseModel):
    diagram_code: str | None = Field(alias="diagramCode")