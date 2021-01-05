import Heading from "carbon-react/lib/components/heading";
import styled from 'styled-components';

import RenderContent from "./RenderContent";

const Aside = styled.section`
  margin: 2em 0;
  padding: 1em;
  background: rgba(0,0,0,.2);
  border: 2px solid rgba(0,0,0,.3);
`;

export default function AsideBlock({ part }) {
  const { title, content } = part;
  return (
    <Aside>
      {title && <Heading title={title} divider={false} />}
      <RenderContent content={content} />
    </Aside>
  );
}
