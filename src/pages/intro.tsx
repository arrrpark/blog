import styled from 'styled-components';
import { Container, SemiTitle } from '../components/CommonComponents';

export default function Intro() {
  const projects = [
    {
      title: 'SmartSearch',
      image: '/images/smartsearch.png',
      desc: 'AI-powered document retrieval system using Elasticsearch + LLM.',
      rating: 5,
    },
    {
      title: 'DocScan',
      image: '/images/docscan.png',
      desc: 'Mobile document scanner app with YOLOv8 edge detection.',
      rating: 4,
    },
  ];

  return (
    <>
      <div className="introsection">
        <Container>
          <div className="d-flex flex-column justify-content-center Im-text-section">
            <span className="Im-text">
              Hello, I'm <span className="name-Im-text">Seungmyun Park</span>
            </span>
            <br />
            <br />
            <span className="Im-text-enthusiastic py-2">
              Enthusiastic Dev 😎
            </span>
            <br />
            <br />

            <DefaultDiv style={{ color: 'white' }}>
              Knack of building applications with mobile and data
            </DefaultDiv>
          </div>
        </Container>
      </div>
      <div className="about-me-section">
        <Container style={{ paddingTop: 40 }}>
          <div className="about-me-text">About Me</div>
          <DefaultDiv style={{ paddingTop: 40 }}>
            💻 My name is Seungmyun, a software engineer from South Korea. I'm
            current based in Vancouver, Canada.
          </DefaultDiv>
          <DefaultDiv>
            🦾 I have 5 years of working experience in mobile devleopment. While
            I was working, I noticed that features I have to implement in a
            mobile app is heavily decided by data. These projects came from my
            motive to learn data.
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
            visualization are done via python and basic libraries such as R,
            Numpy, Pandas, Scipy, Matplotlib and Seaborn. These projects are a
            record of my work based on various data science courses.
          </DefaultDiv>
          <DefaultDiv>
            🛠 This website is made using React, Typescript and github-pages.
            100% made by myself.
          </DefaultDiv>
        </Container>
      </div>
      <div className="work-sample-section">
        <Container style={{ paddingTop: 40 }}>
          <div className="about-me-text">Work Sample</div>
          <div className="project-grid">
            <div className="project-card">
              <img src="bike.png" alt="Cyclistic" />
              <h3>Cyclistic Bike-Share Analytics</h3>
              <p>
                A comprehensive analysis featuring EDA, SARIMA Forecasting, and
                Tableau dashboards.
              </p>
              <button>View Project</button>
            </div>

            <div className="project-card">
              <img src="stock.png" alt="Stock" />
              <h3>Stock Price Prediction Web App</h3>
              <p>
                Deep dive into LSTM-based stock prediction with Streamlit and
                technical indicators.
              </p>
              <button>View Project</button>
            </div>
            <div className="project-card">
              <img src="stock.png" alt="Stock" />
              <h3>Stock Price Prediction Web App</h3>
              <p>
                Deep dive into LSTM-based stock prediction with Streamlit and
                technical indicators.
              </p>
              <button>View Project</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

const DefaultDiv = styled.div`
  font-size: 18px;
  padding-top: 20px;
  color: #000000;
  line-height: 120%;
`;
