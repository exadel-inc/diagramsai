from pydantic import BaseModel, Field


class GenerateResponse(BaseModel):
    graph_definiton: str | None = Field(serialization_alias="graphDefiniton")
