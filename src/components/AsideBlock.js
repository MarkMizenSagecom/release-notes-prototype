import Heading from "carbon-react/lib/components/heading";
import RenderContent from "./RenderContent";

export default function AsideBlock({ part }) {
  const { title, content } = part;
  return (
    <aside>
      {title && <Heading title={title} divider={false} />}
      <RenderContent content={content} />
    </aside>
  );
}
