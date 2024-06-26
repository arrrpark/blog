import { Route, Link } from "react-router-dom";
import "./App.css";
import Survey from "./pages/surveyProject";
import Bike from "./pages/bikeProject";
import Intro from "./pages/intro";
import ClimageChange from './pages/climageChange';
import ECommerce from './pages/eCommerce';
import Franchise from "./pages/franchise";
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
            <SemiTitle>Survey on data scientists</SemiTitle>
          </Link>
          <Link to="/franchise" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>Comparing the locations of two franchise</SemiTitle>
          </Link>
          <Link to="/bike" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>Prediction on bike rental rate</SemiTitle>
          </Link>
          <Link to="/climate" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>NLP on climate change</SemiTitle>
          </Link>
          <Link to="/ecommerce" style={{color: 'inherit', textDecoration: 'none'}}>
            <SemiTitle>Ecommerce data analysis</SemiTitle>
          </Link>
        </Menu>
        
        <Route exact path="/" component={Intro} />
        <Route exact path="/franchise" component={Franchise} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/bike" component={Bike} />
        <Route exact path="/climate" component={ClimageChange} />
        <Route exact path="/ecommerce" component={ECommerce} />
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
  flex-direction: column;
  justify-content: flex-start;

  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding: 20px;
`;

const MenuTitle = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const SemiTitle = styled.div`
  font-size: 16px;
  padding-top: 10px;
  padding-left: 15px;
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'OpenSans_Condensed-Regular', sans-serif
  }
`

export default App;

