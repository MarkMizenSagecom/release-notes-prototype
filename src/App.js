import { useState, useEffect } from "react";
import Release from "./components/Release";

function App({ parent }) {
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
  });

  useEffect(() => {
    if (!parent || !parent.dataset) {
      setState({
        loading: false,
        error: true,
        data: null,
      });
      return;
    }

    try {
      if (parent.dataset.content) {
        console.log(parent.dataset.content);
        const data = JSON.parse(parent.dataset.content);
        console.log({ data });
        setState({
          loading: false,
          error: false,
          data,
        });
      }

      if (parent.dataset.url) {
        async function getData() {
          const resp = await fetch(parent.dataset.url);
          const data = await resp.json();
          setState({
            loading: false,
            error: false,
            data,
          });
        }
        getData();
      }
    } catch (error) {
      console.error(error);
      setState({
        loading: false,
        error: true,
        data: null,
      });
    }
  }, [parent, setState]);

  if (state.error) {
    return <div>There was an error</div>;
  }

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {state.data
        ? state.data.map(({ id, name, content_parts }) => (
            <Release key={id} name={name} parts={content_parts} />
          ))
        : null}
    </div>
  );
}

export default App;
