import DOMPurify from "dompurify";

import DynamicContent from './DynamicContent';

export default function RenderHTMLContent({ content }) {
  const sanitizedContent = { __html: DOMPurify.sanitize(content) };
  return <DynamicContent dangerouslySetInnerHTML={sanitizedContent}></DynamicContent>;
}
