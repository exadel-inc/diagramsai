from typing import Annotated
from fastapi import Depends
from app.mermaid.services.llm_processor import LlmProcessor as MermaidLlmProcessor
from app.plant_uml.services.llm_processor import LlmProcessor as PlantUmlLlmProcessor
from prompts.prompt_provider import (
    PromptProvider,
    prompt_provider as prompt_provider_instance,
)
from config import Config, config


def get_config() -> Config:
    return config


def get_prompt_provider() -> PromptProvider:
    return prompt_provider_instance


class LlmDependency:
    def __init__(self, diagram_type: str):
        self.diagram_type = diagram_type

    def __call__(
        self,
        prompt_provider: Annotated[PromptProvider, Depends(get_prompt_provider)],
    ):
        if self.diagram_type == "mermaid":
            return MermaidLlmProcessor(prompt_provider)

        if self.diagram_type == "plant_uml":
            return PlantUmlLlmProcessor(prompt_provider)

        raise ValueError("Wrong diagram type")
