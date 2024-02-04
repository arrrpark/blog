import { Route, Link } from "react-router-dom";
import "./App.css";
import Survey from "./pages/surveyProject";
import Bike from "./pages/bikeProject";
import styled from "styled-components";
import { CodeBlock } from '@atlaskit/code';

function App() {
  return (
      <Container>
        <Menu>
          <MenuTitle>Data science projects</MenuTitle>
          <Link to="/survey" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>- Survey on data scientists</SemiTitle>
          </Link>
          <Link to="/bike" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>- Prediction on bike rental rate</SemiTitle>
          </Link>
        </Menu>
        {/* <Right>
         
        </Right> */}
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/bike" component={Bike} />
      </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  align-content: center;

  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding: 20px;
`;

const MenuTitle = styled.div`
  font-size: larger;
`;

const SemiTitle = styled.div`
  font-size: 15px;
  padding-top: 5px;
  padding-left: 20px;
`

export default App;

