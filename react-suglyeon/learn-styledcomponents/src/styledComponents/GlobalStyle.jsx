import { createGlobalStyle } from "styled-components";
import reset from "./reset.module.css";

const GlobalStyle = createGlobalStyle`
${reset}

body{
    font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
}
`;

export default GlobalStyle;
