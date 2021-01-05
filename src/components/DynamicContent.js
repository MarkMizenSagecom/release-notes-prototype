import styled from "styled-components";

const DynamicContent = styled.div`
  h1 {
    font-size: 200%;
    margin: 1em 0;
  }
  h2 {
    font-size: 180%;
    margin: 1em 0;
  }
  h3 {
    font-size: 160%;
    margin: 1em 0;
  }
  p {
    margin: 0 0 1em;
  }
  ol {
    list-style-type: decimal;
    list-style-position: inside;
    margin: 1em 0;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
    margin: 1em 0;
  }
`;

export default DynamicContent;
