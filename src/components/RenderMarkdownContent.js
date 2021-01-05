import ReactMarkdown from "react-markdown";
import DynamicContent from "./DynamicContent";

export default function RenderMarkdownContent({ content }) {
  return (
    <DynamicContent>
      <ReactMarkdown children={content} />
    </DynamicContent>
  );
}
