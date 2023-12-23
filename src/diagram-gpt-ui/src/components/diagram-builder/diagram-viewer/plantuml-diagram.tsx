import { useEffect } from "react";
import { config } from "../../../config";

type PlantUmlDiagramProps = {
  diagramCode: string;
  svg: string;
  onSvgChanged: (svg: string) => void;
};

export function PlantUmlDiagram({
  diagramCode,
  svg,
  onSvgChanged,
}: PlantUmlDiagramProps) {
  useEffect(() => {
    async function process() {
      if (!diagramCode) {
        onSvgChanged("");
        return;
      }

      const url = `${config.apiEndpoint}/plant-uml/encode`;
      const encodedResponse = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: diagramCode,
        }),
      });

      const encoded = await encodedResponse.json();

      const blobResponse = await fetch(
        `${config.plantUmlEndpoint}/svg/${encoded.encoded}`
      );
      const blob = await blobResponse.blob();
      const text = await blob.text();
      const svgText = text.replace(
        '<?xml version="1.0" encoding="us-ascii" standalone="no"?>',
        ""
      );

      onSvgChanged(svgText);
    }

    process();
  }, [diagramCode]);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} className="diagram-svg" />
  );
}
