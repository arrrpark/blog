import { Route, Link } from "react-router-dom";
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  height: calc(100vh);
  position: sticky;
  align-content: center;

  // top: 50px;
  width: 250px; /* Adjust the width as needed */
  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding: 20px;
`;

const BigTitle = styled.div`
  font-size: larger;
`;

const Right = styled.div`
  flex: 5;
  padding: 20px;
  // background-color: #aaa;
`;

function App() {
  return (
    <Container>
      <Menu>
        <BigTitle>From Java to Kotlin</BigTitle>

        <BigTitle>From Objective-C to Swift</BigTitle>
      </Menu>
      <Right>
        <div>Hello</div>
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
