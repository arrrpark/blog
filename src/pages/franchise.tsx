
import styled from "styled-components";
import { Container, BigTitle, DefaultDiv, MenuDiv, SemiTitle, NumberTitle } from "../components/CommonComponents";
import { CodeBlock } from '@atlaskit/code';
import originalCSV from '../images/originalCSV.png';
import extractedCSV from '../images/extractedCSV.png';
import franchiseBarByLocation from '../images/franchiseBarByLocation.png';
import totalFranchiseBar from '../images/totalFranchiseBar.png';
import franchiseScatter from '../images/franchiseScatter.png';
import franchiseMap from '../images/franchiseMap.gif';

export default function Franchise() {
  return (<Container>
  <BigTitle>Data visualization of Starbucks' and Dunkin's distribution on map</BigTitle>
  <DefaultDiv>
   In Korea, there is a widespread perception that Dunkin' Donuts and Starbucks are located close to each other. 
   To investigate whether this perception is accurate, I plan to use public data provided by the Korean government, preprocess andvisualize it on a map, 
   and examine the proximity of this perception.
  </DefaultDiv>
  <SemiTitle>
    This project uses data from Korean government.
  </SemiTitle>
  <div>
    <a target="_blank" href="https://www.data.go.kr/dataset/15012005/fileData.do">
        https://www.data.go.kr/dataset/15012005/fileData.do
    </a>
  </div>
  <MenuDiv>
    <div>It consists of the following 1 CSV file.</div>
    <div>- store.csv : The store information including store name, category, location(latitute, longitude), etc.</div>
    <div>- The contents are written in Korean, so it is necessary to translate it to English.</div>
  </MenuDiv>
  <SemiTitle>
    Used tools & Algorithms
  </SemiTitle>
  <MenuDiv>
    - Pandas, Numpy, Matplotlib, and Seaborn.
  </MenuDiv>

  <SemiTitle>
    Preprocessing the data.
  </SemiTitle>
  <NumberTitle> 1. Identify the CSV's data shape.</NumberTitle>
  <CodeBlock language="python" text={readingCode}/>
  <ChartImg src={originalCSV} style={{width: 500, height: 800}}/>
  <DefaultDiv>
    <div>- The public data contains too much data for anlaysis. This occupies more than 170MB.</div>
    <div>- So extracting only necessary part from the CSV data is essential.</div>
    <div>- Since the all columns are in Korean, these should be translated to English.</div>
  </DefaultDiv>

  <NumberTitle> 2. Extract only necessary data from the CSV and translate columns to English.</NumberTitle>
  <CodeBlock language="python" text={extractingCode}/>
  <ChartImg src={extractedCSV} style={{width: 500, height: 200}}/>
  <DefaultDiv>
    <div>- Only name, city, location, longtitude and latitute data is extracted.</div>
    <div>- The size of data is reduced from 170MB to 22MB.</div>
    <div>- New data is saved as a new CSV file.</div>
  </DefaultDiv>

  <NumberTitle> 3. Open the newly created CSV and make another DataFrame for data visualization</NumberTitle>
  <CodeBlock language="python" text={franchiseCode}/>
  <DefaultDiv>
    <div>- Lower the name, since the data is not standarized. Then, extract only the name contains specific strings.</div>
    <div>- Made new column 'franchise' to distinghish Baskin robbins and Dunkin donuts.</div>
    <div>- Translate Korean location name to English.</div>
  </DefaultDiv>

  <SemiTitle>
    Visualize the data.
  </SemiTitle>
  
  <NumberTitle> 1. Count the total count and make bar plots of franchise.</NumberTitle>
  <CodeBlock language="python" text={barplotCode}/>
  <ChartImg src={totalFranchiseBar} style={{width: 500, height: 400}}/>
  <ChartImg src={franchiseBarByLocation} style={{width: 900, height: 600}}/>
  <DefaultDiv>
    <div>- There all total of 466 Baskinrobbins and 191 Donkin donuts in Seoul.</div>
    <div>- When we see the total counts by location, low income area such as Gangdong, Gyemchoen and Dobong have very few Dunkin donuts.</div>
    <div>- The number of shops is very high at Gangnam, which is area of that has the highest income in Korea.</div>
  </DefaultDiv>

  <NumberTitle> 2. Visualize the franchises' locations on scattor plot.</NumberTitle>
  <CodeBlock language="python" text={scatterCode}/>
  <ChartImg src={franchiseScatter} style={{width: 800, height: 400}}/>
  <DefaultDiv>
    <div>- When there is a Dunkin donuts, it is highly likely that there are also multiple Baskinrobbins arount it.</div>
    <div>- The distribution of points resembles the shape of Seoul.</div>
  </DefaultDiv>

  <NumberTitle> 3. Visualize the franchises' locations on map and cluster the markers.</NumberTitle>
  <CodeBlock language="python" text={mapCode}/>
  <ChartImg src={franchiseMap} style={{width: 900, height: 600}}/>
  <DefaultDiv>
    <div>- Installed folium library to visualize the distribution data on map.</div>
    <div>- Markers are clustered according to user's zoom.</div>
  </DefaultDiv>
</Container>);
}

export const ChartImg = styled.img`
  width: 1200px;
  height: 500px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`

const readingCode = `df = pd.read_csv("./store.csv", sep='|')
df.info()`

const extractingCode = `columns = ['상호명', '시도명', '시군구명','경도', '위도']
df = df[columns].copy()
df.rename(columns ={'상호명': 'name', '시도명': 'city', '시군구명': 'location', '위도': 'latitude', '경도': 'longitude'}, inplace=True)
df.info()

df_seoul = df[df["city"] == "서울특별시"].copy()
df_seoul.to_csv("seoul_open_store.csv", index=False)
df_seoul = pd.read_csv("./seoul_open_store.csv")`

const franchiseCode = `df_seoul = pd.read_csv("./seoul_open_store.csv")
df_seoul["name_lowered"] = df_seoul["name"].str.lower()
df_franchise = df_seoul[df_seoul["name_lowered"].str.contains('베스킨|배스킨|baskin|던킨|dunkin')].copy()
df_franchise.loc[df_franchise["name_lowered"].str.contains("배스킨|베스킨|baskin"), "franchise"] = "Baskin"
df_franchise["franchise"] = df_franchise["franchise"].fillna("Dunkin")

df_franchise.loc[df_franchise["location"].str.contains("강남구"), "location"] = "Ganam"
df_franchise.loc[df_franchise["location"].str.contains("서초구"), "location"] = "Seocho"
df_franchise.loc[df_franchise["location"].str.contains("노원구"), "location"] = "Nowon"
df_franchise.loc[df_franchise["location"].str.contains("은평구"), "location"] = "Enpyeong"
df_franchise.loc[df_franchise["location"].str.contains("강서구"), "location"] = "Gangseo"
df_franchise.loc[df_franchise["location"].str.contains("광진구"), "location"] = "Gwangjin"
df_franchise.loc[df_franchise["location"].str.contains("송파구"), "location"] = "Songpa"
df_franchise.loc[df_franchise["location"].str.contains("용산구"), "location"] = "Yongsan"
df_franchise.loc[df_franchise["location"].str.contains("성북구"), "location"] = "Sungbuk"
df_franchise.loc[df_franchise["location"].str.contains("중구"), "location"] = "Joong"
df_franchise.loc[df_franchise["location"].str.contains("서대문구"), "location"] = "Seodaemoon"
df_franchise.loc[df_franchise["location"].str.contains("마포구"), "location"] = "Mapo"
df_franchise.loc[df_franchise["location"].str.contains("양천구"), "location"] = "Yangcheono"
df_franchise.loc[df_franchise["location"].str.contains("영등포구"), "location"] = "Yongdeongpo"
df_franchise.loc[df_franchise["location"].str.contains("구로구"), "location"] = "Gooro"
df_franchise.loc[df_franchise["location"].str.contains("중랑구"), "location"] = "Joongrang"
df_franchise.loc[df_franchise["location"].str.contains("동작구"), "location"] = "Dongjak"
df_franchise.loc[df_franchise["location"].str.contains("동대문구"), "location"] = "Dongdaemoon"
df_franchise.loc[df_franchise["location"].str.contains("관악구"), "location"] = "Kwanak"
df_franchise.loc[df_franchise["location"].str.contains("강동구"), "location"] = "Gangdong"
df_franchise.loc[df_franchise["location"].str.contains("종로구"), "location"] = "Jongro"
df_franchise.loc[df_franchise["location"].str.contains("도봉구"), "location"] = "Dobong"
df_franchise.loc[df_franchise["location"].str.contains("성동구"), "location"] = "Sungdong"
df_franchise.loc[df_franchise["location"].str.contains("강북구"), "location"] = "Gangbuk"
df_franchise.loc[df_franchise["location"].str.contains("금천구"), "location"] = "Gyemcheon"`

const barplotCode = `df_franchise["franchise"].value_counts().plot.bar()
sns.countplot(data=df_franchise, x="franchise")
plt.figure(figsize=(15,4))
sns.countplot(data=df_franchise, x="location", hue="franchise")
plt.xticks(rotation=45)
plt.show()`

const scatterCode = `sns.scatterplot(data=df_franchise, x="longitude", y="latitude", hue="franchise")
plt.show()`

const mapCode = `import folium
from folium.plugins import MarkerCluster
from IPython.display import display

lat = df_franchise["latitude"].mean()
long = df_franchise["longitude"].mean()

m = folium.Map(location=[lat, long], zoom_start=12)
marker_cluster = MarkerCluster().add_to(m)

for i in df_franchise.index:
    sub_lat = df_franchise.loc[i, "latitude"]
    sub_long = df_franchise.loc[i, "longitude"]
    title=df_franchise.loc[i, "franchise"]
    
    icon_color="blue"
    if df_franchise.loc[i, "franchise"] == "Dunkin":
        icon_color = "red"
    
    folium.Marker(
        [sub_lat, sub_long],
        icon=folium.Icon(color=icon_color),
        popup='<i>{title}</i>',
        tooltip=title
    ).add_to(marker_cluster)
    
m.save("location.html")`