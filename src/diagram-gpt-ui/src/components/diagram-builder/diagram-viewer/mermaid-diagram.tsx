import mermaid from "mermaid";
import { useEffect } from "react";

type MermaidDiagramProps = {
  diagramCode: string;
  svg: string;
  onSvgChanged: (svg: string) => void;
};

export function MermaidDiagram({
  diagramCode,
  svg,
  onSvgChanged,
}: MermaidDiagramProps) {
  useEffect(() => {
    if (!diagramCode) {
      onSvgChanged("");
      return;
    }

    mermaid.render("mermaid", diagramCode).then(
      ({ svg: response }) => {
        onSvgChanged(response);
      },
      (error) => {
        console.log(error);

        onSvgChanged("");
      }
    );
  }, [diagramCode]);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} className="diagram-svg" />
  );
}
