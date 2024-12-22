import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import PageRegistry from "./PageRegistry";
import Api from "./Api";

new PageRegistry().init();

let api = new Api();

const root = createRoot(document.getElementById("root")!);
root.render(<App page={document.location.pathname} api={api}/>);
