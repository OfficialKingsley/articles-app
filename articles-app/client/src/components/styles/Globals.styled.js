/** @format */

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  list-style-type: none;
  
}
.content {
  transition: padding-top 0.5s ease-in-out;
  background-color: rgb(0,7,28);
  color: white;
  min-height: calc(100vh - 70px);
}
.content.open {
  padding-top: 140px;
}
.content.closed {
  padding-top: 0;
}
.nav.closed {
  top: -200px
}
`;

export default GlobalStyles;
