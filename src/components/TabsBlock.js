import { Tabs, Tab } from "carbon-react/lib/components/tabs";

import RenderContent from './RenderContent';
import styled from "styled-components"

const Section = styled.section`
  margin: 2em 0;
`;

export default function TabsBlock({ part }) {
  const { tabs } = part;
  return (
    <Section>
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
    </Section>
  );
}
