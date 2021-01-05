import Release from "./components/Release";

function App() {
  const releases = [
    {
      id: "asfaldsfjh",
      name: "Test",
      content_parts: [
        {
          component: "text",
          content: "This is a test of the text content...",
        },
        {
          component: "tabs",
          content: [
            {
              title: "Tab 1",
              content: "This is the content for tab 1",
            },
            {
              title: "Tab 2",
              content: "This is the content for tab 2",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {releases.map(({ id, name, content_parts }) => (
        <Release key={id} name={name} parts={content_parts} />
      ))}
    </div>
  );
}

export default App;
