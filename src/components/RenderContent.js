import TextBlock from './TextBlock';
import TabsBlock from './TabsBlock';

export default function RenderContent({ contentPart }) {
    // Render nothing if no content
    if (!contentPart) {
      return null;
    }
  
    // Default render if just passed string
    if (typeof contentPart === "string") {
      return <TextBlock content={contentPart} />;
    }
  
    switch (contentPart.component) {
      case "tabs":
        return <TabsBlock content={contentPart.content} />;
      default:
        return <TextBlock content={contentPart.content} />;
    }
  }
  