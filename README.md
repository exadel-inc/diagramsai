# Exadel Diagrams GPT

![GitHub contributors](https://img.shields.io/github/contributors/exadel-inc/diagrams-gpt)
![GitHub Repo stars](https://img.shields.io/github/stars/exadel-inc/diagrams-gpt?style=plastic)
![GitHub Repo forks](https://img.shields.io/github/forks/exadel-inc/diagrams-gpt?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/exadel-inc/diagrams-gpt)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Diagrams GPT** is an application that enables users to create various forms of diagrams such as flowcharts, organizational charts, and network diagrams by inputting simple, natural language instructions. This allows users to visualize data simply and efficiently, saving time and effort compared to traditional manual methods.

## Description

**Diagrams GPT** is an innovative application that streamlines the process of creating sophisticated diagrams by interpreting natural language inputs. The application leverages the power of the latest GPT-4 AI technology to build [Mermaid](https://github.com/mermaid-js/mermaid) and [PlantUML](https://github.com/plantuml/plantuml) diagrams, allowing users to create a wide range of diagrams including, but not limited to, flowcharts, sequence diagrams, class diagrams, and more. By just describing the desired diagram in simple language, the application translates your instructions into perfect visual representations, thereby enhancing data understanding and communication while minimizing manual work.

[![Solution Screen Shot][product-screenshot]]

## Installation

1. Get a API Key at [https://platform.openai.com/](https://platform.openai.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/exadel-inc/diagrams-gpt.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install python packages
   ```sh
   pip install -r requirements.txt
   ```

There is an option run app through docker by executing the following command:

```sh
docker-compose up
```

Open the app in the browser by navigating to `https://127.0.0.1:3000/`.

Finally, docker images are available on the docker bub:
- https://hub.docker.com/r/exadel/diagram-gpt-ui
- https://hub.docker.com/r/exadel/diagram-gpt

## Limitations

As of now, not all diagram types are supported, e.g. there is limited support for azure diagrams, and no support for aws anc gcp diagrams.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Contributions are welcomed and greatly appreciated.
After creating your first contributing PR you will be requested to sign our Contributor License Agreement by commenting your PR with a special message.

## License

Distributed under the MIT License. See [`LICENSE`](./License) for more information.

## Contact

Messengers and other contacts

- Dzmitry Pauliu (dpauliu@exadel.com)
- Lizaveta Pauliu (lpauliu@exadel.com)

[product-screenshot]: screenshot.png
