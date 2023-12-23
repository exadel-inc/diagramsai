import os


class PromptProvider:
    cache = {}

    def get_prompt(self, folders: list[str], prompt_name: str, **kwargs) -> str:
        path = os.path.join(
            "prompts",
            *folders,
            f"{prompt_name}.txt",
        )

        base_prompt = PromptProvider.cache.get(path)

        if not base_prompt:
            with open(
                path,
                "r",
                encoding="utf-8",
            ) as prompt_file:
                base_prompt = prompt_file.read()
            PromptProvider.cache[path] = base_prompt

        if not kwargs:
            return base_prompt

        prompt = base_prompt.format(**kwargs)
        return prompt


prompt_provider = PromptProvider()
