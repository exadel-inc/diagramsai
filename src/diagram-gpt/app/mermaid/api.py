from typing import Annotated
from fastapi import APIRouter, Body, Depends, Path
from dependencies import LlmDependency
from app.common.models.generate_response import GenerateResponse
from app.common.models.generate_request import GenerateRequest
from .models.mermaid_diagram_type import MermaidDiagramType
from .services.llm_processor import LlmProcessor

api = APIRouter(tags=["mermaid"], prefix="/mermaid")


LlmProcessorDependency = Annotated[LlmProcessor, Depends(LlmDependency("mermaid"))]


@api.post(
    "/{diagram_type}/generate",
    name="Generate mermaid diagram",
)
async def agenerate_mermaid(
    diagram_type: Annotated[
        MermaidDiagramType,
        Path(title="Diagram type"),
    ],
    request: Annotated[GenerateRequest, Body(title="Request body")],
    llm_processor: LlmProcessorDependency,
) -> GenerateResponse:
    """
    Generate mermaid diagram from the natural language text.
    """

    graph_definiton = (
        await llm_processor.aupdate(
            diagram_type, request.text, request.diagram_code, request.openai_api_key
        )
        if request.diagram_code
        else await llm_processor.agenerate(
            diagram_type, request.text, request.openai_api_key
        )
    )

    return GenerateResponse(graph_definiton=graph_definiton)
