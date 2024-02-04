import styled from "styled-components";
{/* <div style={{padding: 30, paddingLeft:330}}></div> */}

export const Container = styled.div`
  padding: 30px;
  padding-left: 330px;
`

export const Menu = styled.div`
  height: calc(100vh);
  position: sticky;
  align-content: center;

  // top: 50px;
  width: 250px; /* Adjust the width as needed */
  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding: 20px;
`;

export const MenuTitle = styled.div`
  font-size: larger;
`;

export const BigTitle = styled.div`
  font-size: 40px;
  color: #5f9ea0;
  font-weight: bold;
`;

export const DefaultDiv = styled.div`
  font-size: 20px;
  color: #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 120%;
`;

export const SemiTitle = styled.div`
  font-size: 25px;
  color: #708090;
  font-weight: bold;
  padding-top: 30px;
`

export const NumberTitle = styled.div`
  font-size: 22px;
  color: #544C4A;
  font-weight: 600;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const MenuDiv = styled.div`
  font-size: 18px;
  color: #3E424B;
  padding-left: 20px;
  padding-top: 20px;
  line-height: 150%;
`;