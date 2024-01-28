import { Route, Link } from "react-router-dom";
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import styled from "styled-components";
import byGender from './images/byGender.png';
import byCountry from './images/byCountry.png';
import byDegree from './images/byDegree.png';
import byAge from './images/byAge.png';
import byMajor from './images/byMajor.png';
import byExperience from './images/byExperience.png';
import { CodeBlock } from '@atlaskit/code';

const genderCode = `seaborn.countplot(y='GenderSelect', data=mcq)`
const countryCode = `con_df = pandas.DataFrame(mcq['Country'].value_counts())
con_df['Country'] = con_df.index
con_df.columns = ['Responds', 'Countries']
con_df.head(20)`
const ageCode = `seaborn.displot(mcq[mcq['Age'] > 0]['Age'])`
const degreeCode = `seaborn.countplot(y='FormalEducation', data=mcq)`
const majorCode = `mcq_major_count = pandas.DataFrame(mcq['MajorSelect'].value_counts())
mcq_major_percent = pandas.DataFrame(mcq['MajorSelect'].value_counts(normalize=True))
mcq_major_df = mcq_major_count.merge(mcq_major_percent, left_index=True, right_index=True)
mcq_major_df.columns = ['Responds', 'Ratio']

pyplot.figure(figsize=(6,8))
seaborn.countplot(y='MajorSelect', data=mcq)`
const jobCode = `mcq_es_count = pandas.DataFrame(mcq['EmploymentStatus'].value_counts())
mcq_es_percent = pandas.DataFrame(mcq['EmploymentStatus'].value_counts(normalize=True))
mcq_es_df = mcq_es_count.merge(mcq_es_percent, left_index=True, right_index=True)
mcq_es_df.columns = ['Responds', 'Ratio']

seaborn.countplot(y='Tenure', data=mcq)`

function App() {
  return (
    <Container>
      {/* <Menu>
        <MenuTitle>From Java to Kotlin</MenuTitle>

        <MenuTitle>From Objective-C to Swift</MenuTitle>
      </Menu> */}
      
      <Right>
        <BigTitle>Analsis & data visualization on programmers in the field of data science</BigTitle>
        <DefaultDiv>
          The primary objective of this project is to investigate the status of individuals who are either learning or working in the field of data science.
          This status includes factors such as gender, country, age, major and work experience details.
        </DefaultDiv>
        <SemiTitle>
          This project uses data from Kaggle
        </SemiTitle>
        <div>
          <a target="_blank" href="https://www.kaggle.com/datasets/kaggle/kaggle-survey-2017">https://www.kaggle.com/datasets/kaggle/kaggle-survey-2017 </a>
        </div>
        <MenuDiv>
          The Collected data has following characteristics.
          <div>- The survey period was from August 7th to August 25th in 2017.</div>
          <div>- The servey was participated in by 16716 respondents from 171 countries.</div>
          <div>- Most of the respondents were found mainly through Kaggle channels, such as email list, discussion forums and SNS channels</div>
          <div>- Different questions were asked between those who are employed and who are not</div>
        </MenuDiv>
        <MenuDiv>
           <div>It consists of the following 5 CSV files.</div>
           <div>- schema.csv : a CSV file with survey schema. </div>
           <div>- multipleChoiseResponse.csv : Respondents' answers to multiple choice and ranking questions.</div>
           <div>- freeFormREsponse.csv: Respondents' freeform answers to Kaggle's survey questions.</div>
           <div>- conversionRates.csv : Currency conversion rates (to USD) as accessed from the R Package "quantmod" on September 14, 2017.</div>
           <div>- RespondentTypeREADME.txt : This is a schema for decoding the responses in the "Asked" column of the schema.csv file </div>
        </MenuDiv>
        <SemiTitle>
          Used tools
        </SemiTitle>
        <MenuDiv>
          - Pandas, Numpy, Scipy, Matplotlib, Seaborn
        </MenuDiv>
        <SemiTitle>
          Data analysis & visualization
        </SemiTitle>
        <NumberTitle> 1. Number of respondents by gender. </NumberTitle>
        <CodeBlock language="python" text={genderCode}/>
        <ChartImg src={byGender}/>
        <DefaultDiv>
          About 80% of the total respondents are male, whereas only 16% are women. It is clearly seen that the major gender in data science is male.
        </DefaultDiv>
        <NumberTitle> 2. Number of respondents by country. </NumberTitle>
        <CodeBlock language="python" text={countryCode}/>
        <ChartImg src={byCountry}/>
        <DefaultDiv>
          The United States had the highest number with 4,197, followed by India, Russia, and the United Kingdom.
          It appears clearly that advanced countries are dominant, excluding countries with large populations such as India, China, and Brazil.
        </DefaultDiv>
        <NumberTitle> 3. Number of respondents by age. </NumberTitle>
        <CodeBlock language="python" text={ageCode}/>
        <ChartImg src={byAge}/>
        <DefaultDiv>
          Most of the respondents are aged between 20's and 30's. The respondents rate falls sharply as they enter into 40's, 50's, and 60's.
        </DefaultDiv>
        <NumberTitle>4. Respondents' degree.</NumberTitle>
        <CodeBlock language="python" text={degreeCode}/>
        <ChartImg src={byDegree} />
        <DefaultDiv>  
          Most respondents have at least a bachelor's degree, and the majority hold a doctoral degree.
        </DefaultDiv>
        <NumberTitle>5. Respondents' major.</NumberTitle>
        <CodeBlock language="python" text={majorCode}/>
        <MajorImg src={byMajor} />
        <DefaultDiv>
          Computer science is the highest at 33%, followed by mathematics and statistics, engineering, physics, and so on.
          Over 90% of respondents majored in STEM (Science, Technology, Engineering, and Mathematics) fields.
        </DefaultDiv>
        <NumberTitle>6. Number of programming experience of respondents.</NumberTitle>
        <CodeBlock language="python" text={jobCode}/>
        <ExperienceImg src={byExperience} />
        <DefaultDiv>
          Most respondents have less than 5 years of programming experience, which are referred to as junior or mid-level programmers.
          It is also notable that significant number of respondents do not engage in programming at all.
        </DefaultDiv>
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

const MenuTitle = styled.div`
  font-size: larger;
`;

const BigTitle = styled.div`
  font-size: 40px;
  color: #5f9ea0;
  font-weight: bold;
`;

const DefaultDiv = styled.div`
  font-size: 20px;
  color: #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 120%;
`;

const SemiTitle = styled.div`
  font-size: 25px;
  color: #708090;
  font-weight: bold;
  padding-top: 30px;
`

const NumberTitle = styled.div`
  font-size: 22px;
  color: #544C4A;
  font-weight: 600;
  padding-top: 15px;
  padding-bottom: 15px;
`

const MenuDiv = styled.div`
  font-size: 18px;
  color: #3E424B;
  padding-left: 20px;
  padding-top: 20px;
  line-height: 150%;
`;

const ChartImg = styled.img`
  width: 1000px;
  height: 500px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

const MajorImg = styled.img`
  width: 1000px;
  height: 1000px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

const ExperienceImg = styled.img`
  width: 1000px;
  height: 700px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

const Right = styled.div`
  flex: 5;
  padding: 50px;
`;

export default App;

