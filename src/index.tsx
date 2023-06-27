import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
// import Cardapio from "./pages/Cardapio";
import Inicio from 'pages/Inicio';
import Cardapio from "pages/Cardapio";

const rotaInicial = window.location.pathname === '/' ? <Inicio /> : <Cardapio />; 
ReactDOM.render(
  <React.StrictMode>{rotaInicial}</React.StrictMode>,
  document.getElementById('root'),
);
