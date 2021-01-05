import { Tabs, Tab } from "carbon-react/lib/components/tabs";

export default function TabsBlock({ content }) {
  return (
    <Tabs align="left" position="top">
      {content &&
        content.map((item, index) => (
          <Tab
            errorMessage="error"
            warningMessage="warning"
            infoMessage="info"
            title={item.title}
            key={`tab-${index}`}
            tabId={`tab-${index}`}
          >
            {item.content}
          </Tab>
        ))}
    </Tabs>
  );
}
