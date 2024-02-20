
import styled from "styled-components";
import { Container, BigTitle, DefaultDiv, MenuDiv, SemiTitle, NumberTitle } from "../components/CommonComponents";
import twitData from '../images/twitData.png';
import unigram from '../images/unigram.png';
import wordCloudUni from '../images/wordCloudUni.png';
import bigramBoth from '../images/bigramBoth.png';
import sentimentAnalaysis from '../images/sentimentAnalysis.png';
import twitterSentiment from '../images/twitterSentiment.png';
import redditSentiment from '../images/redditSentiment.png';

export default function ClimateChange() {
  return (<Container>
  <BigTitle>NLP on climate change using Twitter and Reddit data</BigTitle>
  <DefaultDiv>
    The primary objective of this project is to conduct a comprehensive NLP analysis on public opinion based on twitter/reddit.
  </DefaultDiv>
  <SemiTitle>
    This project uses data from Twitter and Reddit that are scraped through Twink and Pmaw packages.
  </SemiTitle>
  <div>
    <a target="_blank" href="https://github.com/twintproject/twint">
        https://github.com/twintproject/twint
    </a>
  </div>
  <div>
    <a target="_blank" href="https://pypi.org/project/pmaw/0.0.2/">
      https://pypi.org/project/pmaw/0.0.2/
    </a>
  </div>
  <SemiTitle>
    Used tools & Algorithms
  </SemiTitle>
  <MenuDiv>
    - Pandas, Numpy, Scipy, Matplotlib, Seaborn, Wordcloud, NLTK, Twint and Pmaw
  </MenuDiv>
  <SemiTitle>
    Data analysis & visualization
  </SemiTitle>
  
  <NumberTitle style={{ paddingBottom: 0 }}> 1. Data preparation and exploratory data analysis</NumberTitle>
  <ChartImg src={twitData} style={{ height: 350 }}/>
  <DefaultDiv>
    <div>- These datasets are scraped from Twitter and Reddit.</div>
    <div>- These datasets are good to use because it provides large dataset, open-source.</div>
    <div>- The number of observations of two datasets is total of 104,195.</div>
  </DefaultDiv>

  <NumberTitle style={{ paddingBottom: 0 }}> 2. Count the word with n-grams and wordcloud</NumberTitle>
  <ChartImg src={unigram} style={{ height: 600 }}/>
  <DefaultDiv>
    <div>- Counting the word frequency can be crucial part of NLP as it gives insights into the analysis of populor ideas in public discussion</div>
    <div>- This project used NLTK to count frequency.</div>
  </DefaultDiv>
  <ChartImg src={wordCloudUni}/>
  <DefaultDiv>
    <div>- Above figure shows the word-cloud images created on data.</div>
    <div>- Common words like 'climate', 'earth', 'energe', 'change' can be found.</div>
    <div>- Some interesting words like 'Covid', 'Austrailia' can only be found in Twitter, and 'evidence', 'ocean', 'see level' in Reddit.</div>
  </DefaultDiv>
  <ChartImg src={bigramBoth} style={{ height: 700 }}/>
  <DefaultDiv>
    <div>- Above figure shows the bigram counts created on data.</div>
    <div>- Bigram counts involve more meaningful information related to climate change.</div>
    <div>- The words are more directly related to climate change, like 'fight climate', 'greenhouse effect'.</div>
  </DefaultDiv>

  <NumberTitle style={{ paddingBottom: 0 }}> 3. Sentiment analysis using Roberta</NumberTitle>
  <DefaultDiv>
    <div>- Below figure is the result of sentiment analysis, using RoBERTa</div>
    <div>- RoBERTa is a neural network language model proposed by Google in 2018.</div>
    <div>- RoBERTa is pre-trained on 160GB of texts and can be used to perform text classification.</div>
  </DefaultDiv>
  <ChartImg src={sentimentAnalaysis} />
  <DefaultDiv>
    <div>- Over the half of the texts were classified as neutral classes on both platforms</div>
    <div>- Where as the portion of nagative words occupies more than 30%, the portion of positive words is below 10%.</div>
    <div>- It is shown that the general impression of public's opiion on climate change is fairly negative.</div>
    <div>- Below tables show examples of how RoBERTa classifies the words.</div>
  </DefaultDiv>
  <ChartImg src={twitterSentiment} style={{height: 550}}/>
  <ChartImg src={redditSentiment} style={{height: 550}}/>
</Container>);
}

export const ChartImg = styled.img`
  width: 1200px;
  height: 500px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`