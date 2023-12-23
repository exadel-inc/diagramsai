FROM python:3.11-buster AS base

WORKDIR /diagram-gpt

ENV openai_api_key = "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"

COPY ./requirements.txt /diagram-gpt/requirements.txt

RUN pip install --no-cache-dir -r /diagram-gpt/requirements.txt

COPY . /diagram-gpt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
