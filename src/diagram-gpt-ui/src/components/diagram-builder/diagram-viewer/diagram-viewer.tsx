import { useState } from "react";
import "./diagram-viewer.scss";
import DownloadIcon from "@mui/icons-material/Download";
import { DiagramProvider } from "../../../models/diagram-provider";
import { MermaidDiagram } from "./mermaid-diagram";
import { PlantUmlDiagram } from "./plantuml-diagram";

type DiagramViewerProps = {
  diagramCode: string;
  diagramProvider: DiagramProvider;
};

export function DiagramViewer({
  diagramCode,
  diagramProvider,
}: DiagramViewerProps) {
  const [svg, setSvg] = useState(diagramCode);

  const downloadSvg = (): void => {
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
        {svg ? <DownloadIcon onClick={downloadSvg}></DownloadIcon> : <></>}
      </div>
      {diagramProvider === DiagramProvider.Mermaid ? (
        <MermaidDiagram
          diagramCode={diagramCode}
          svg={svg}
          onSvgChanged={setSvg}
        />
      ) : (
        <PlantUmlDiagram
          diagramCode={diagramCode}
          svg={svg}
          onSvgChanged={setSvg}
        />
      )}
    </div>
  );
}
