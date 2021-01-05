import Heading from "carbon-react/lib/components/heading";
import styled from "styled-components";

import Part from "./Part";

const Article = styled.article`
  padding-left: 2em;
  padding-bottom: 4em;
  border-left: 2px solid #0073C2;
`;


function Release({ name, parts }) {
  return (
    <Article>
      <header>
        <Heading title={name} />
      </header>
      <main>
        {parts &&
          parts.map((part, index) => <Part contentPart={part} key={index} />)}
      </main>
    </Article>
  );
}

export default Release;
