import { useMutation } from "react-query";
import { config } from "../../config";
import { DiagramProvider } from "../../models/diagram-provider";
import { Dispatch } from "react";
import { ActionType } from "../../state/actions";

type GraphBuilderProps = {
  openaiApiKey: string;
  dispatch: Dispatch<ActionType>;
};

export const useGraphBuilderQuery = ({
  openaiApiKey,
  dispatch,
}: GraphBuilderProps) => {
  return useMutation({
    mutationFn: (body: {
      diagramProvider: DiagramProvider;
      requirements: string[];
      diagramType: string;
      diagramCode?: string;
    }) => {
      dispatch({ type: "set-loading", loading: true });

      const diagramProividerUrl =
        body.diagramProvider === DiagramProvider.Mermaid
          ? "mermaid"
          : "plant-uml";

      const url = `${config.apiEndpoint}/${diagramProividerUrl}/${body.diagramType}/generate`;

      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: body.requirements,
          diagramCode: body.diagramCode,
          openaiApiKey: openaiApiKey,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .finally(() => {
          dispatch({ type: "set-loading", loading: false });
        });
    },
    onSuccess(data) {
      dispatch({ type: "set-diagram-code", diagramCode: data.graphDefiniton });
    },
    onError(error) {},
  });
};
