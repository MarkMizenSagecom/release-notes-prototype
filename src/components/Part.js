import RenderHTMLContent from "./RenderHTMLContent";
import TabsBlock from "./TabsBlock";
import AsideBlock from "./AsideBlock";
import SectionBlock from "./SectionBlock";
import MarkdownBlock from "./RenderMarkdownContent";

export default function Part({ contentPart }) {
  // Render nothing if no content
  if (!contentPart) {
    return null;
  }

  // Default render if just passed string
  if (typeof contentPart === "string") {
    return <RenderHTMLContent content={contentPart} />;
  }

  switch (contentPart.component) {
    case "tabs":
      return <TabsBlock part={contentPart} />;
    case "aside":
      return <AsideBlock part={contentPart} />;
    default:
      return <SectionBlock part={contentPart} />;
  }
}
