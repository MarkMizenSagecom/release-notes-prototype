import RenderHTMLContent from "./RenderHTMLContent";
import RenderMarkdownContent from "./RenderMarkdownContent";

export default function RenderContent({content}) {
    if (!content) {
        return null;
    }

    if (content.html || content.text) {
        return <RenderHTMLContent content={content.html || content.text} />
    }

    if (content.markdown) {
        return <RenderMarkdownContent content={content.markdown} />
    }


    return null;
}