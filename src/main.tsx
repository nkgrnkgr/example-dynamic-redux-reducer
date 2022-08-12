import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ReduxApp } from "./ReduxApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxApp>
        <App />
      </ReduxApp>
    </ChakraProvider>
  </React.StrictMode>
);
