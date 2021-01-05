import { Accordion } from "carbon-react/lib/components/accordion";
import RenderContent from "./RenderContent";

function AccordionBlock({ part }) {
  const { content, title } = part;
  return (
    <Accordion title={title}>
      <RenderContent content={content} />
    </Accordion>
  );
}

export default AccordionBlock;
