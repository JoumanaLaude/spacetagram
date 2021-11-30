import React from "react";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}