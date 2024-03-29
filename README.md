# Exadel DiagramsAI

![GitHub contributors](https://img.shields.io/github/contributors/exadel-inc/diagramsai)
![GitHub Repo stars](https://img.shields.io/github/stars/exadel-inc/diagramsai?style=plastic)
![GitHub Repo forks](https://img.shields.io/github/forks/exadel-inc/diagramsai?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/exadel-inc/diagramsai)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**DiagramsAI** is an application that enables users to create various forms of diagrams, such as flowcharts, organizational charts, and network diagrams, by inputting simple, natural language instructions. This allows users to visualize data simply and efficiently, saving time and effort compared to traditional manual methods.

## Description

**DiagramsAI** is an innovative application that streamlines the process of creating sophisticated diagrams by interpreting natural language inputs. The application leverages the power of the latest GPT-4 AI technology to build [Mermaid](https://github.com/mermaid-js/mermaid) and [PlantUML](https://github.com/plantuml/plantuml) diagrams, allowing users to create a wide range of diagrams including, but not limited to, flowcharts, sequence diagrams, class diagrams, and more. By just describing the desired diagram in simple language, the application translates your instructions into perfect visual representations, thereby enhancing data understanding and communication while minimizing manual work.

![Solution Screen Shot][product-screenshot]

## Demo Page

Demo application is deployed by the URL https://diagramsai-ui.ashywave-7a9b8b6b.eastus.azurecontainerapps.io and can be accessed by abyone.

## Installation

1. Get an API Key at [https://platform.openai.com/](https://platform.openai.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/exadel-inc/diagramsai.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install python packages
   ```sh
   pip install -r requirements.txt
   ```

There is an option to run the app through docker by executing the following command:

```sh
docker-compose up
```

Open the app in the browser by navigating to `https://127.0.0.1:3000/`.

Finally, docker images are available on the docker hub:
- https://hub.docker.com/r/exadel/diagram-gpt-ui
- https://hub.docker.com/r/exadel/diagram-gpt

## Limitations

As of now, not all diagram types are supported, e.g. there is limited support for Azure diagrams and no support for AWS and GCP diagrams.

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Contributions are welcomed and greatly appreciated.
After creating your first contributing PR, you will be requested to sign our Contributor License Agreement by commenting on your PR with a special message.

## License

Distributed under the MIT License. See [`LICENSE`](./License) for more information.

## Contact

Messengers and other contacts

- Dzmitry Pauliu (dpauliu@exadel.com)
- Lizaveta Pauliu (lpauliu@exadel.com)

[product-screenshot]: screenshot.png
