import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import PageRegistry from "./PageRegistry";

new PageRegistry().init();

const root = createRoot(document.getElementById("root")!);
root.render(<App page={document.location.pathname}/>);
