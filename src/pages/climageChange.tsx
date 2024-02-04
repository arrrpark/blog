
import styled from "styled-components";
import { Container, BigTitle, DefaultDiv, MenuDiv, SemiTitle, NumberTitle } from "../components/CommonComponents";
import twitData from '../images/twitData.png';
import unigram from '../images/unigram.png';
import wordCloudUni from '../images/wordCloudUni.png';
import bigramBoth from '../images/bigramBoth.png';
import sentimentAnalaysis from '../images/sentimentAnalysis.png';
import twitterSentiment from '../images/twitterSentiment.png';
import redditSentiment from '../images/redditSentiment.png';

export default function Bike() {
  return (<Container>
  <BigTitle>Comprehensive NLP on climate change using Twitter and Reddit data</BigTitle>
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

const bikeUsageCode = `train = pandas.read_csv('/bike/train.csv')
train["datetime"] = pandas.to_datetime(train["datetime"], errors="coerce")
missingno.matrix(train, figsize=(12,5))

train["year"] = train["datetime"].dt.year
train["month"] = train["datetime"].dt.month
train["day"] = train["datetime"].dt.day
train["hour"] = train["datetime"].dt.hour
train["minute"] = train["datetime"].dt.minute
train["second"] = train["datetime"].dt.second

figure, ((ax1, ax2, ax3)) = pyplot.subplots(nrows=1, ncols=3)
figure.set_size_inches(18,8)

seaborn.barplot(data=train, x="year", y="count", ax=ax1)
seaborn.barplot(data=train, x="month", y="count", ax=ax2)
seaborn.barplot(data=train, x="hour", y="count", ax=ax3)

fig = pyplot.subplot()
seaborn.pointplot(data=train, x="hour", y="count", hue="workingday")`

const factorsCode = `fig, (ax1, ax2, ax3) = pyplot.subplots(ncols=3)
fig.set_size_inches(12,5)
seaborn.regplot(x="temp", y="count", data=train, ax=ax1)
seaborn.regplot(x="windspeed", y="count", data=train, ax=ax2)
seaborn.regplot(x="humidity", y="count", data=train, ax=ax3)`

const withOutlierCode = `trainWithoutOutliers = train[numpy.abs(train["count"] - train["count"].mean()) <= (3*train["count"])]

figure, axes = pyplot.subplots(ncols=2, nrows=2)
figure.set_size_inches(12,10)

seaborn.histplot(train["count"], ax=axes[0][0])
stats.probplot(train["count"], dist="norm", fit=True, plot=axes[0][1])

seaborn.histplot(numpy.log(trainWithoutOutliers["count"]), ax=axes[1][0])
stats.probplot(train["count"], dist="norm", fit=True, plot=axes[1][1])`

const prepareDataCode = `train = pandas.read_csv("/bike/train.csv", parse_dates=["datetime"])
test = pandas.read_csv("/bike/test.csv", parse_dates=["datetime"])

dateTime = train["datetime"]

train["year"] = dateTime.dt.year
train["month"] = dateTime.dt.month
train["day"] = dateTime.dt.day
train["hour"] = dateTime.dt.hour
train["minute"] = dateTime.dt.minute
train["second"] = dateTime.dt.second
train["dayofweek"] = dateTime.dt.dayofweek

test["year"] = dateTime.dt.year
test["month"] = dateTime.dt.month
test["day"] = dateTime.dt.day
test["hour"] = dateTime.dt.hour
test["minute"] = dateTime.dt.minute
test["second"] = dateTime.dt.second
test["dayofweek"] = dateTime.dt.dayofweek`

const windSpeedDataCode = `# replace 0 windspeed with data from machine learning value
def predict_windspeed(data):
    dataWind0 = data.loc[train["windspeed"] == 0]
    dataWindNot0 = data.loc[data["windspeed"] != 0]
    
    wCol = ["season", "weather", "humidity", "month", "temp", "year", "atemp"]
    dataWindNot0["windspeed"] = dataWindNot0["windspeed"].astype("str")
    
    rfModel_wind = RandomForestClassifier()
    rfModel_wind.fit(dataWindNot0[wCol], dataWindNot0["windspeed"])

    wind0Values = rfModel_wind.predict(X = dataWind0[wCol])
    
    predictWind0 = dataWind0
    predictWindNot0 = dataWindNot0
    
    predictWind0["windspeed"] = wind0Values
    data = predictWindNot0._append(predictWind0)
    
    data["windspeed"] = data["windspeed"].astype("float")
    
    data.reset_index(inplace = True)
    data.drop("index", inplace = True, axis = 1)
    return data

train = predict_windspeed(train)`

const trainAndEvaluateCode =`categorial_feature_names = ["season", "holiday", "workingday", "weather", "dayofweek", "month", "year", "hour"]

for var in categorial_feature_names:
    train[var] = train[var].astype("category")
    test[var] = test[var].astype("category")

feature_names = ["season", "weather", "temp", "atemp", "humidity", "windspeed", "year", "hour", "dayofweek", "holiday", "workingday"]

x_train = train[feature_names]
x_test = test[feature_names]
label_name = "count"
y_train = train[label_name]

def rmsle(predicted_values, actual_values):
    predicted_values = numpy.array(predicted_values)
    actual_values = numpy.array(actual_values)
    
    log_predict = numpy.log(predicted_values + 1)
    log_actual = numpy.log(actual_values + 1)

    difference = log_predict - log_actual
    difference = numpy.square(difference)
    
    mean_difference = difference.mean()
    score = numpy.sqrt(mean_difference)
    return score

rmsle_scorer = make_scorer(rmsle)

k_fold = KFold(n_splits=10, shuffle=False)

max_depth_list = []
model = RandomForestRegressor(n_estimators=100, n_jobs = -1, random_state = 0)

score = cross_val_score(model, x_train, y_train, cv=k_fold, scoring=rmsle_scorer)
score = score.mean()
print("Score = {0:.05f}".format(score))`