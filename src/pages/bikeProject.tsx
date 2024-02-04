
import styled from "styled-components";
import { Container, BigTitle, DefaultDiv, MenuDiv, SemiTitle, NumberTitle } from "../components/CommonComponents";
import { CodeBlock } from '@atlaskit/code';
import bikeUsage from '../images/bikeUsage.png';
import workingHour from '../images/workingHour.png';
import factorsToCount from '../images/factorsToCount.png';
import probBikes from '../images/probBikes.png';
import adjustedWind from '../images/adjustedWind.png';
import bikeScore from '../images/bikeScore.png';
import bikeRank from '../images/bikeRank.png';

export default function Bike() {
  return (<Container>
  <BigTitle>Data visualization and prediction on the count of bike rental</BigTitle>
  <DefaultDiv>
    The primary objective of this project is to visualize various factors that are associated with bike rental rate and predict how these factors affect
    the count of total rentals.
  </DefaultDiv>
  <SemiTitle>
    This project uses data from Kaggle
  </SemiTitle>
  <div>
    <a target="_blank" href="https://www.kaggle.com/datasets/brajeshmohapatra/bike-count-prediction-data-set">
      https://www.kaggle.com/datasets/brajeshmohapatra/bike-count-prediction-data-set
    </a>
  </div>
  <MenuDiv>
    <div>It consists of the following 2 CSV files.</div>
    <div>- train.csv : Use this dataset to train the model. This dataset is comprised of first 18 months.</div>
    <div>- test.csv : Use the trained model to predict the count of total rentals for each hour during the next 6 months.</div>
  </MenuDiv>
  <MenuDiv>
    Here is the description of all variables.
    <div>- datetime: hourly date + timestamp</div>
    <div>- season: Type of season (1 = spring, 2 = summer, 3 = fall, 4 = winter)</div>
    <div>- holiday: whether the day is considered a holiday</div>
    <div>- workingday: whether the day is neither a weekend nor holiday</div>
    <div>- weather: weather</div>
    <div>- temp: temperature in Celsius</div>
    <div>- atemp: "feels like" temperature in Celsius</div>
    <div>- humidity: relative humidity</div>
    <div>- windspeed: wind speed</div>
    <div>- casual: number of non-registered user rentals initiated</div>
    <div>- registered: number of registered user rentals initiated</div>
    <div>- count: number of total rentals</div>
  </MenuDiv>
  <SemiTitle>
    Used tools & Algorithms
  </SemiTitle>
  <MenuDiv>
    - Pandas, Numpy, Scipy, Matplotlib, Seaborn, Random Forest, RMSE
  </MenuDiv>
  <SemiTitle>
    Data analysis & visualization
  </SemiTitle>
  
  <NumberTitle> 1. Visualize and compare the bike usage by year, month and hour.</NumberTitle>
  <CodeBlock language="python" text={bikeUsageCode}/>
  <ChartImg src={bikeUsage} style={{height: 500}}/>
  <ChartImg src={workingHour} />
  <DefaultDiv>
    <div>- Bike rental count is higher in 2012 than 2011.</div>
    <div>- The monthly rental volume is highest in June and July, while it is lowest in January.</div>
    <div>- The hourly rental volume is highest in rush hours. If it's working day, the volume is different.</div>
  </DefaultDiv>

  <NumberTitle> 2. Visualize the correlation between rental count and temperature, humidity and windspeed.</NumberTitle>
  <CodeBlock language="python" text={factorsCode}/>
  <ChartImg src={factorsToCount} />
  <DefaultDiv>
    <div>- It seems that there is no corelation between rental count and temperature, humidity and windspeed.</div>
    <div>- Some of the windspeeds are recorded as zero because it is not recorded.</div>
  </DefaultDiv>

  <NumberTitle> 3. Remove outliers from windspeed data and make it follow normal distribution.</NumberTitle>
  <CodeBlock language="python" text={withOutlierCode}/>
  <ChartImg src={probBikes} style={{height: 800}}/>
  <DefaultDiv>
    <div>- Without outliers, windspeed follows more nomralized patterns.</div>
    <div>- Data for training would be better if it follows normal districution.</div>
  </DefaultDiv>

  <SemiTitle>
    Train data and evaluate the model by RMSE
  </SemiTitle>
  <NumberTitle> 1. Prepare Data</NumberTitle>
  <CodeBlock language="python" text={prepareDataCode}/>
  <DefaultDiv>
    <div>- Read and parse data to datetime from a csv File</div>
    <div>- Add data features for training.</div>
  </DefaultDiv>

  <NumberTitle> 2. Replace 0 recorded data in windSpeed column with random forest classifier</NumberTitle>
  <CodeBlock language="python" text={windSpeedDataCode}/>
  <DefaultDiv>
    <div>- Rather than just removing 0 recorded data, replace that data with random forest classifier to make it more useful data.</div>
    <div>- The form of adjusted data is as follows</div>
  </DefaultDiv>
  <ChartImg src={adjustedWind} style={{height: 800}}/>

  <NumberTitle> 3. Train and evaluate through KFold, RandomForestRegressor, and RMSE</NumberTitle>
  <CodeBlock language="python" text={trainAndEvaluateCode}/>
  <DefaultDiv>
    <div>- The final score of the moddel is as follows</div>
    <div>- This ranked 248th out of 3501 in Kaggle competition</div>
  </DefaultDiv>
  <ChartImg src={bikeScore} style={{width: 400, height: 50}}/>
  <DefaultDiv>
  </DefaultDiv>
  <ChartImg src={bikeRank} style={{height: 250}}/>
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