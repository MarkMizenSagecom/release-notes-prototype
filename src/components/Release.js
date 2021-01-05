import Heading from "carbon-react/lib/components/heading";

import RenderContent from "./RenderContent";

function Release({ name, parts }) {
  return (
    <article>
      <header>
        <Heading title={name} />
      </header>
      <main>
        {parts &&
          parts.map((part, index) => (
            <RenderContent contentPart={part} key={index} />
          ))}
      </main>
    </article>
  );
}

export default Release;
