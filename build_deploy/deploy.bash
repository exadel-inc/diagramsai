az login
az upgrade

az acr login --name sdlcmodernizationcontainerregistry

# build images locally first
cd src
cd diagram-gpt

docker build --platform linux/amd64 -t diagramsai/backend:latest .   
#docker build --platform linux/amd64 -t diagramsai/ui:latest .      

docker tag diagramsai/backend:latest sdlcmodernizationcontainerregistry.azurecr.io/diagramsai/backend:latest
docker push sdlcmodernizationcontainerregistry.azurecr.io/diagramsai/backend:latest

#docker tag diagramsai/ui:latest sdlcmodernizationcontainerregistry.azurecr.io/diagramsai/ui:latest
#docker push sdlcmodernizationcontainerregistry.azurecr.io/diagramsai/ui:latest

az containerapp up \
    --name diagramsai-backend \
    --logs-workspace-id 7b64dc73-5d27-40d9-ae13-b2788ce4f2ef \
    --environment sdlc-modernization-env \
    --resource-group sdlc-modernization-rg \
    --location eastus \
    --image sdlcmodernizationcontainerregistry.azurecr.io/diagramsai/backend:latest \
    --target-port 80 \
    --ingress external \
    --query properties.configuration.ingress.fqdn

#az containerapp up \
#    --name diagramsai-ui \
#    --logs-workspace-id 7b64dc73-5d27-40d9-ae13-b2788ce4f2ef \
#    --environment sdlc-modernization-env \
#    --resource-group sdlc-modernization-rg \
#    --location eastus \
#    --image sdlcmodernizationcontainerregistry.azurecr.io/diagramsai/ui:latest \
#    --target-port 80 \
#    --ingress external \
#    --query properties.configuration.ingress.fqdn
