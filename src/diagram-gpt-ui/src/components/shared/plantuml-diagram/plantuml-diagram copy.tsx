import mermaid from "mermaid";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./plantuml-diagram.scss";
import DownloadIcon from "@mui/icons-material/Download";
import { config } from "../../../config";

type PlantUmlDiagramProps = {
  graphDefinition: string;
};

export function PlantUmlDiagram({ graphDefinition }: PlantUmlDiagramProps) {
  const [svg, setSvg] = useState(graphDefinition);

  useEffect(() => {
    async function process() {
      if (!graphDefinition) {
        setSvg("");
        return;
      }

      const url = `${config.apiEndpoint}/plant-uml/encode`;
      const encodedResponse = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: graphDefinition,
        }),
      });

      const encoded = await encodedResponse.json();

      const blobResponse = await fetch(
        `https://www.plantuml.com/plantuml/svg/${encoded.encoded}`
      );
      const blob = await blobResponse.blob();
      const text = await blob.text();
      const svgText = text.replace('<?xml version="1.0" encoding="us-ascii" standalone="no"?>', "");

      setSvg(svgText);
    }

    process();
  }, [graphDefinition]);

  const saveSvg = (): void => {
    let preface = '<?xml version="1.0" standalone="no"?>\r\n';
    let svgBlob = new Blob([preface, svg], {
      type: "image/svg+xml;charset=utf-8",
    });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "diagram.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="diagram">
      <div className="controls">
        {svg ? <DownloadIcon onClick={saveSvg}></DownloadIcon> : <></>}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className="plantuml-diagram"
      />
    </div>
  );
}
