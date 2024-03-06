import logo from "../../logo.png";
import { DiagramBuilder } from "../../components/diagram-builder/diagram-builder";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MermaidLogo from "../../mermaid.png";
import PlantUmlLogo from "../../pluginIcon.svg";
import { DiagramProvider } from "../../models/diagram-provider";
import { useContext, useState } from "react";
import { Tooltip } from "@mui/material";
import {
  DiagramBuilderContext,
  DiagramBuilderDispatchContext,
} from "../../state/context";

const queryClient = new QueryClient();

export function Main() {
  const state = useContext(DiagramBuilderContext);
  const dispatch = useContext(DiagramBuilderDispatchContext);

  const diagramProviders = [
    {
      logo: MermaidLogo,
      type: DiagramProvider.Mermaid,
      tooltip: "Mermaid",
    },
    {
      logo: PlantUmlLogo,
      type: DiagramProvider.PlantUML,
      tooltip: "PlantUML",
    },
  ].map((item) => (
    <Tooltip title={item.tooltip} key={item.type}>
      <img
        src={item.logo}
        className={
          state.diagramProvider === item.type
            ? "Diagram-logo selected"
            : "Diagram-logo"
        }
        alt="logo"
        onClick={() =>
          dispatch({ type: "set-diagram-provider", diagramProvider: item.type })
        }
      />
    </Tooltip>
  ));

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Diagrams AI</h1>
        </header>
        <main className="App-main">
          <div className="app-menu">{diagramProviders}</div>
          <div className="app-container">
            <DiagramBuilder />
          </div>
        </main>
      </div>
      <ToastContainer position="bottom-right" />
    </QueryClientProvider>
  );
}
