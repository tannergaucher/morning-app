import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  min-height: 100vh;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;

}
`

export default GlobalStyles
