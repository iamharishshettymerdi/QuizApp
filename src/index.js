import React from "react";
import { createRoot } from "react-dom/client";
import Container from "./components/Container/Container";
//import "./Styles/style.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Container />);