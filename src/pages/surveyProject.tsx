
import styled from "styled-components";
import { Container, BigTitle, DefaultDiv, MenuDiv, SemiTitle, NumberTitle } from "../components/CommonComponents";
import { CodeBlock } from '@atlaskit/code';
import byGender from '../images/byGender.png'
import byCountry from '../images/byCountry.png';
import byDegree from '../images/byDegree.png';
import byAge from '../images/byAge.png';
import byMajor from '../images/byMajor.png';
import byExperience from '../images/byExperience.png';
import nextYearTool from '../images/nextYearTool.png';
import medianSalary from '../images/medianSalary.png';
import salaryByGender from '../images/salaryByGender.png';

export default function Survey() {
  return (
    <Container>
      <BigTitle>Anaylsis & data visualization on programmers in the field of data science</BigTitle>
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
        <div>- freeFormResponse.csv: Respondents' freeform answers to Kaggle's survey questions.</div>
        <div>- conversionRates.csv : Currency conversion rates (to USD) as accessed from the R Package "quantmod" on September 14, 2017.</div>
        <div>- RespondentTypeREADME.txt : This is a schema for decoding the responses in the "Asked" column of the schema.csv file </div>
      </MenuDiv>
      <SemiTitle>
        Used tools
      </SemiTitle>
      <MenuDiv>
        - Pandas, Numpy, Matplotlib, Seaborn
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

      <NumberTitle>7. MLTool that data scientists want to learn next year</NumberTitle>
      <CodeBlock language="python" text={MLToolCode}/>
      <ExperienceImg src={nextYearTool} />
      <DefaultDiv>
        Tensorflow ranked at the top that data scientists want to learn next year, followed by two dominant languages, python and R.
        Tools to store and analysis such as Spark, Hadoop, Hive are also ranked highly.
      </DefaultDiv>

      <NumberTitle>8. Top 20 median salary of data scientists around the world</NumberTitle>
      <CodeBlock language="python" text={MedianSalaryCode}/>
      <SalaryImg src={medianSalary} />
      <DefaultDiv>
        The United States is ranked at the top with a median salary of $108,000, which is more than twice the amount of Italy, which is ranked 20th. 
        Primarily, developed countries in North America and Europe are ranked at the top. In Asia, Japan and Singapore are included.
      </DefaultDiv>

      <NumberTitle>9. Gender-based salary distribution of data scientists in South Korea</NumberTitle>
      <CodeBlock language="python" text={SalaryByGenderCode}/>
      <ChartImg src={salaryByGender} />
      <DefaultDiv>
        The salary for men ranges between $22,000 and $60,000 USD, while for women, it ranges between $0 and $25,000 USD.
        This indicates a significant salary difference based on gender.
      </DefaultDiv>
    </Container>
  )
}

export const ChartImg = styled.img`
  width: 1000px;
  height: 500px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

export const MajorImg = styled.img`
  width: 1000px;
  height: 1000px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

export const ExperienceImg = styled.img`
  width: 1000px;
  height: 700px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

export const SalaryImg = styled.img`
  width: 500px;
  height: 700px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

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

const MLToolCode = `mcq_ml_tool_count = pandas.DataFrame(
  mcq['MLToolNextYearSelect'].value_counts())
mcq_ml_tool_percent = pandas.DataFrame(
  mcq['MLToolNextYearSelect'].value_counts(normalize=True))
mcq_ml_tool_df = mcq_ml_tool_count.merge(
  mcq_ml_tool_percent,
  left_index=True,
  right_index=True
).head(20)

data = mcq['MLToolNextYearSelect'].value_counts().head(20)
seaborn.barplot(y=data.index, x=data)`

const MedianSalaryCode = `mcq['CompensationAmount'] = mcq['CompensationAmount'].str.replace(',', '')
mcq['CompensationAmount'] = mcq['CompensationAmount'].str.replace('-', '')

rates = pandas.read_csv('conversionRates.csv')
rates.drop('Unnamed: 0', axis=1, inplace=True)

salary = mcq[['CompensationAmount', 'CompensationCurrency', 'GenderSelect', 'Country', 'CurrentJobTitleSelect']].dropna()

salary = salary.merge(rates, left_on='CompensationCurrency', right_on='originCountry', how='left')
salary['Salary'] = pandas.to_numeric(
    salary['CompensationAmount']
) *  salary['exchangeRate']

sal_coun = salary.groupby('Country')['Salary'].median().sort_values(ascending=False)[:30].to_frame()`

const SalaryByGenderCode = `salary_korea = salary.loc[(salary['Country'] == 'South Korea')]
seaborn.boxplot(y='GenderSelect', x='Salary', data=salary_korea)`