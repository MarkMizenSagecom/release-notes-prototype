import Heading from "carbon-react/lib/components/heading";
import RenderContent from "./RenderContent";
import styled from "styled-components"

const Section = styled.section`
  margin: 2em 0;
`;

export default function AsideBlock({ part }) {
  const { title, content } = part;
  return (
    <Section>
      {title && <Heading title={title} divider={false} />}
      <RenderContent content={content} />
    </Section>
  );
}
