import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Release from "./components/Release";

// Lots going on in this component. Need to try and seperate it out into multiple components somehow
const AppWrap = styled.div`
  padding: 1em;
  max-width: 100%;
  width: 800px;
  margin: auto;
`;

function App({ parent }) {
  const [atts, setAtts] = useState({
    data: null,
    url: null,
  });

  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
  });

  const observerRef = useRef(
    new MutationObserver(function (mutations) {
      mutations.forEach(function ({ type, target }) {
        if (type !== "attributes") {
          return;
        }

        // Do nothing if the other attributes are the ones changed
        if (
          atts.content === target.dataset.content &&
          atts.url === target.dataset.url
        ) {
          return;
        }

        setAtts({
          content: target.dataset.content,
          url: target.dataset.url,
        });
      });
    })
  );

  // Update the atts variable when the parent element changes
  useEffect(() => {
    if (!parent || !parent.dataset) {
      setState({
        loading: false,
        error: true,
        data: null,
      });
      return;
    }
    setAtts({
      content: parent.dataset.content,
      url: parent.dataset.url,
    });
  }, [parent, setState, setAtts]);

  // Adds an observer to the current parent element
  useEffect(() => {
    if (!observerRef.current) {
      return;
    }
    observerRef.current.disconnect();
    observerRef.current.observe(parent, {
      attributes: true,
      childList: false,
      subtree: false,
    });
  }, [parent, observerRef]);

  // Gets the data from the atts
  useEffect(() => {
    try {
      if (atts.content) {
        const data = JSON.parse(atts.content);
        setState({
          loading: false,
          error: false,
          data,
        });
      } else if (atts.url) {
        async function getData() {
          try {
            const resp = await fetch(atts.url);
            const { data } = await resp.json();
            setState({
              loading: false,
              error: false,
              data,
            });
          } catch (error) {
            setState({
              loading: false,
              error: true,
              data: null,
            });
          }
        }
        getData();
      } else {
        throw new Error("No data passed");
      }
    } catch (error) {
      setState({
        loading: false,
        error: true,
        data: null,
      });
    }
  }, [atts, setState]);

  // Renders an error message
  if (state.error) {
    return <div>There was an error</div>;
  }

  // Renders a loading message
  if (state.loading) {
    return <div>Loading...</div>;
  }

  // Renders the data
  return (
    <AppWrap>
      {state.data
        ? state.data.map(({ id, name, content_parts }) => (
            <Release key={id} name={name} parts={content_parts} />
          ))
        : null}
    </AppWrap>
  );
}

export default App;
