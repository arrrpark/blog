import styled from 'styled-components';
import { Container, SemiTitle } from '../components/CommonComponents';

export default function Intro() {
  return (
    <Container>
      <SemiTitle style={{ paddingTop: 0 }}>
        Welcome to my data science projects portfolio!
      </SemiTitle>
      <DefaultDiv style={{ paddingTop: 40 }}>
        💻 My name is Seungmyun, a software engineer from South Korea. I'm
        current based in Vancouver, Canada.
      </DefaultDiv>
      <DefaultDiv>
        🦾 I have 5 years of working experience in mobile devleopment. While I
        was working, I noticed that features I have to implement in a mobile app
        is heavily decided by data. These projects came from my motive to learn
        data.
      </DefaultDiv>
      <DefaultDiv>
        💡 I'm always eager to learn new things, enjoying challenges.
      </DefaultDiv>
      <DefaultDiv>
        👩🏼‍💻 As a mobile developer, I'm also interested in corporating AI
        technologies into a mobile app.
      </DefaultDiv>
      <DefaultDiv>
        🌲 These projects use data from Kaggle and open-source. Analysis and
        visualization are done via python and basic libraries such as Numpy,
        Pandas, Scipy, Matplotlib and Seaborn. These projects are a record of my
        work based on various data science courses such as Udemy and Coursera.
      </DefaultDiv>
      <DefaultDiv>
        🛠 This website is made using React, Typescript and github-pages. 100%
        made by myself.
      </DefaultDiv>
    </Container>
  );
}

const DefaultDiv = styled.div`
  font-size: 18px;
  padding-top: 20px;
  color: #000000;
  line-height: 120%;
`;
