import Heading from "carbon-react/lib/components/heading";

import Part from "./Part";

function Release({ name, parts }) {
  return (
    <article>
      <header>
        <Heading title={name} />
      </header>
      <main>
        {parts &&
          parts.map((part, index) => <Part contentPart={part} key={index} />)}
      </main>
    </article>
  );
}

export default Release;
