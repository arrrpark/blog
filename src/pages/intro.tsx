import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../components/CommonComponents';
import { byMajor } from '../images/survey';
import { wordCloudUni } from '../images/climage';
import { franchiseScatter } from '../images/franchise';
import { transfer1, transfer2 } from '../images/coreml';

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
          <div className="section-title">About Me</div>
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
          <div className="section-title">Work Sample</div>
          <div className="section-semi-title">CoreML & iOS</div>
          <div className="project-grid">
            <div className="project-card">
              <ChartImg src={transfer1} style={{ width: 320, height: 150 }} />
              <h3>Data Preparation & transfer learning</h3>
              <p>
                This project focuses on data collection and training for
                transfer learning in computer vision.
              </p>
              <a
                href="https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%AC%B8%EC%84%9C-%EC%9D%B8%EC%8B%9D-%EB%AA%A8%EB%8D%B8-coreml-%EA%B0%9C%EB%B0%9C%EA%B8%B0-81b20b5e8571"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View blog</button>
              </a>
            </div>
            <div className="project-card">
              <ChartImg src={transfer2} style={{ width: 100, height: 150 }} />
              <h3>Embedding a model into an iOS app</h3>
              <p>Integrating and Running the Trained Model for Inference</p>
              <a
                href="https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-coreml-%EB%AA%A8%EB%8D%B8-%EB%84%A3%EA%B3%A0-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A1%9C-%EC%9D%B8%EC%8B%9D%EC%8B%9C%ED%82%A4%EA%B8%B0-890ac737b476"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View blog</button>
              </a>
            </div>
          </div>
          <div className="section-semi-title">Data science work</div>
          <div className="project-grid">
            <div className="project-card">
              <ChartImg src={byMajor} />
              <h3>Data Visualization</h3>
              <p>
                Insights into Tools, Technologies, and Demographics of Data and
                Machine Learning Practitioners
              </p>
              <Link
                to="/survey"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <button>View Project</button>
              </Link>
            </div>

            <div className="project-card">
              <ChartImg src={franchiseScatter} />
              <h3>Geospatial visualization</h3>
              <p>
                Comparative Study of Baskin Robbins and Dunkin’ Donuts Store
                Presence in Seoul
              </p>
              <Link
                to="/franchise"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <button>View Project</button>
              </Link>
            </div>
            <div className="project-card">
              <ChartImg src={wordCloudUni} />
              <h3>NLP on climate change</h3>
              <p>
                Deep dive into NLP analysis on public opinion based on
                twitter/reddit.
              </p>
              <Link
                to="/climate"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <button>View Project</button>
              </Link>
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

const ChartImg = styled.img`
  width: 300px;
  height: 150px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;
