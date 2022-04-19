import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
  margin-block-start: 0em;
  margin-block-end: 0em;
}
  body {
    margin: 0;
    padding: 0;
     
    font-family: 'Poppins', sans-serif;
  }
  h1,h4{
     color: #e7e7e7
    
  }
`;
 
export default GlobalStyle;