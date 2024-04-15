import base64; 
import zlib; 
from typing import Annotated
from fastapi import APIRouter, Body, Depends, Path
from dependencies import LlmDependency
from app.common.models.generate_response import GenerateResponse
from app.common.models.generate_request import GenerateRequest
from app.common.models.prompt_request import PromptRequest
from app.common.models.prompt_response import PromptResponse
from app.common.models.generate_url_request import GenerateUrlRequest
from app.common.models.generate_url_response import GenerateUrlResponse
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

@api.post(
    "/{diagram_type}/prompt",
    name="Generate instructions required to generate diagram",
)
def generate_mermaid_prompt(
    diagram_type: Annotated[
        MermaidDiagramType,
        Path(title="Diagram type"),
    ],
    request: Annotated[PromptRequest, Body(title="Request body")],
    llm_processor: LlmProcessorDependency,
) -> PromptResponse:
    """
    Generate instructions required to generate diagram.
    """

    prompt = (
        llm_processor.prompt_update(
            diagram_type, request.text, request.diagram_code
        )
        if request.diagram_code
        else llm_processor.prompt_generate(
            diagram_type, request.text
        )
    )

    return PromptResponse(prompt=prompt)

@api.post(
    "/generate-url",
    name="Generate preview url for the mermaid diagram",
)
def generate_mermaid_url(
    request: Annotated[GenerateUrlRequest, Body(title="Request body")]
) -> GenerateUrlResponse:
    """
    API which generates preview url for the mermaid diagram from its code.
    """

    encoded = base64.urlsafe_b64encode(zlib.compress(request.diagram_code.encode('utf-8'), 9)).decode('ascii')

    url = f"https://kroki.io/mermaid/svg/{encoded}"

    return GenerateUrlResponse(url=url)

