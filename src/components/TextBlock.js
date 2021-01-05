import DOMPurify from "dompurify";

export default function TextBlock({content}) {
  const sanitizedContent = { __html: DOMPurify.sanitize(content) };
  return <div dangerouslySetInnerHTML={sanitizedContent}></div>;
}
