import { Tabs, Tab } from "carbon-react/lib/components/tabs";

import RenderContent from './RenderContent';

export default function TabsBlock({ part }) {
  const { tabs } = part;
  return (
    <Tabs align="left" position="top">
      {tabs &&
        tabs.map((item, index) => (
          <Tab
            errorMessage="error"
            warningMessage="warning"
            infoMessage="info"
            title={item.title}
            key={`tab-${index}`}
            tabId={`tab-${index}`}
          >
            <RenderContent content={item.content} />
          </Tab>
        ))}
    </Tabs>
  );
}
