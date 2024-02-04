import { Route, Link } from "react-router-dom";
import "./App.css";
import Survey from "./pages/surveyProject";
import Bike from "./pages/bikeProject";
import Intro from "./pages/intro";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu>
          <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
          <MenuTitle>Data science projects</MenuTitle>
          </Link>
          <Link to="/survey" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>- Survey on data scientists</SemiTitle>
          </Link>
          <Link to="/bike" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>- Prediction on bike rental rate</SemiTitle>
          </Link>
        </Menu>
        
        <Route exact path="/" component={Intro} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/bike" component={Bike} />
      </Container>
    </>
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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'OpenSans_Condensed-Regular', sans-serif
  }
`

export default App;

