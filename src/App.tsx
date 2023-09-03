import { Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { BigTitle } from "./components/styledComponents";
import { useState } from "react";
import { CodeBlock } from "@atlaskit/code";

// npm i --save-dev @types/prismjs

const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  height: calc(100vh);
  position: fixed;
  align-content: center;

  // top: 50px;
  width: 250px; /* Adjust the width as needed */
  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding: 20px;
`;

const TransparentBackground = styled.div`
  width: 250px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 5;
  padding: 20px;
  // background-color: #aaa;
`;

const code = `
let a = [1,2,3]
let b = [4,5,6]

func intToArray(_ num: Int) -> [] {
    return [num]
}
`;

const CodeBlockExample = () => {
  return <CodeBlock language="swift" showLineNumbers={false} text={code} />;
};

function App() {
  const [code, setCode] = useState<string>(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <Container>
      <Menu>
        <BigTitle>From Java to Kotlin</BigTitle>

        <BigTitle>From Objective-C to Swift</BigTitle>
      </Menu>
      <TransparentBackground />
      <Right>
        <CodeBlockExample />
      </Right>
    </Container>
  );
}

{
  /* <Route exact path="/page1">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route> */
}

export default App;
