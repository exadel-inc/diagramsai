from typing import Annotated
from fastapi import APIRouter, Body, Depends, Path
from plantuml import deflate_and_encode
from app.plant_uml.models.encode_request import EncodeRequest
from app.plant_uml.models.encode_response import EncodeResponse
from app.common.models.generate_request import GenerateRequest
from app.common.models.generate_response import GenerateResponse
from dependencies import LlmDependency
from .models.plant_uml_diagram_type import PlantUmlDiagramType
from .services.llm_processor import LlmProcessor


api = APIRouter(tags=["plant-uml"], prefix="/plant-uml")


LlmProcessorDependency = Annotated[LlmProcessor, Depends(LlmDependency("plant_uml"))]


@api.post(
    "/{diagram_type}/generate",
    name="Generate PlantUml diagram",
)
async def agenerate_plantuml(
    diagram_type: Annotated[
        PlantUmlDiagramType,
        Path(title="Diagram type"),
    ],
    request: Annotated[GenerateRequest, Body(title="Request body")],
    llm_processor: LlmProcessorDependency,
) -> GenerateResponse:
    """
    Generate PlantUml diagram from the natural language text.
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


@api.post("/encode", name="Encode PlantUml diagram")
def encode(
    request: Annotated[EncodeRequest, Body(title="Request body")]
) -> EncodeResponse:
    """
    Encode PlantUml diagram from the natural language text.
    """

    encoded = deflate_and_encode(request.text)

    return EncodeResponse(encoded=encoded)
