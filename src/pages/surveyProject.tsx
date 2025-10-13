import styled from 'styled-components';
import {
  Container,
  BigTitle,
  DefaultDiv,
  MenuDiv,
  SemiTitle,
  NumberTitle,
} from '../components/CommonComponents';
import { CodeBlock } from '@atlaskit/code';

import {
  surveyExploration,
  byGender,
  byCountry,
  byDegree,
  byAge,
  byMajor,
  bigdataPref,
  cloudPref,
  languagePref,
  mllibraryPref,
  mlservicePref,
  rdbPref,
  vizPref,
  kernelPref,
  whatData,
  whereData,
} from '../images/survey';

export default function Survey() {
  return (
    <Container>
      <BigTitle>
        Analysis & Data Visualization on Programmers in the Field of Data
        Science
      </BigTitle>
      <DefaultDiv>
        As a software engineer transitioning toward Data and AI, I wanted to
        gain a concrete understanding of how professionals in this field
        actually work. This project will explore their backgrounds, the tools
        they use, and where they are located. As a software engineer
        transitioning toward Data and AI, I wanted to gain a concrete
        understanding of how professionals in this field actually work. This
        project will explore their backgrounds, the tools they use, and where
        they are located.
        <br />
        <br />
        Using the Kaggle survey dataset, I visualized key aspects such as
        respondents’ country, education, and preferred coding environments
        (e.g., Kaggle Kernels, Google Colab). This exploration helps beginners
        like me see the overall ecosystem of Data and AI practitioners and
        identify which technologies are most relevant to focus on.
      </DefaultDiv>
      <SemiTitle>
        Dataset Overview: This project uses data from Kaggle
      </SemiTitle>
      <div>
        <a
          target="_blank"
          href="https://www.kaggle.com/datasets/kaggle/kaggle-survey-2025"
        >
          https://www.kaggle.com/datasets/kaggle/kaggle-survey-2025{' '}
        </a>
      </div>
      <MenuDiv>
        The collected dataset has the following characteristics.
        <div>
          - The survey period was from August 7th to August 25th in 2025.
        </div>
        <div>- The servey was participated in by 23589 respondents.</div>
        <div>
          - Most of the respondents were found mainly through Kaggle channels,
          such as email list, discussion forums and SNS channels
        </div>
      </MenuDiv>
      <SemiTitle>Used tools</SemiTitle>
      <MenuDiv style={{ paddingTop: 0 }}>- R, ggplot2, dplyr, tidyr</MenuDiv>
      <SemiTitle>Libary setting & Data exploration</SemiTitle>
      <CodeBlock language="R" text={exploration}></CodeBlock>
      <ChartImg src={surveyExploration} style={{ width: 1200, height: 230 }} />
      <DefaultDiv style={{ paddingTop: 10 }}>
        By inspecting the CSV file, we can see that variables such as gender,
        age, country, degree, and major are categorical responses. Meanwhile,
        the sections about kernel tools, cloud platforms, ML libraries, and
        programming languages are recorded in a wide format, where each tool has
        its own column. To visualize these later, it is necessary to reshape the
        data into a long format using pivot_longer(). Since the original column
        names are not immediately suitable for processing in R, they will also
        need to be renamed appropriately during preprocessing.
      </DefaultDiv>
      <SemiTitle>Demographic analysis</SemiTitle>
      <DefaultDiv style={{ paddingTop: 0, paddingBottom: 10 }}>
        In the demographic section, I will focus on analyzing Gender, Age,
        Country, Degree, and Major. These variables are located in columns 2, 4,
        5, 6, and 7 of the CSV file. Since the data in its original form is not
        immediately ready for analysis in R, it needs to be cleaned and
        preprocessed using the following code.
      </DefaultDiv>
      <CodeBlock
        language="R"
        text='names(response)[c(2,4,5,6,7)] <- c("Gender", "Age", "Country", "Degree", "Major")'
      />
      <NumberTitle style={{ marginTop: 20 }}>
        {' '}
        1. Top 10 countries with the most responses{' '}
      </NumberTitle>
      <CodeBlock language="R" text={countryCode} />
      <ChartImg style={{ width: 500, height: 500 }} src={byCountry} />
      <NumberTitle> 2. Number of respondents by age </NumberTitle>
      <CodeBlock language="R" text={ageCode} />
      <ChartImg style={{ width: 500, height: 500 }} src={byAge} />
      <NumberTitle> 3. Distrbution of respondents' majors </NumberTitle>
      <CodeBlock language="R" text={majorCode} />
      <ChartImg style={{ width: 1000, height: 500 }} src={byMajor} />
      <NumberTitle>4. Distrbution of respondents' gender</NumberTitle>
      <CodeBlock language="R" text={genderCode} />
      <ChartImg style={{ width: 500, height: 500 }} src={byGender} />
      <NumberTitle>5. Distrbution of respondents' degree</NumberTitle>
      <CodeBlock language="R" text={degreeCode} />
      <MajorImg style={{ width: 500, height: 500 }} src={byDegree} />
      <SemiTitle style={{ paddingTop: 40 }}>Technical Stack Analysis</SemiTitle>
      <DefaultDiv style={{ paddingTop: 0, paddingBottom: 10 }}>
        All questions related to the tech stack are multiple-choice, and the
        data for these questions are stored in a wide format. The items I wanted
        to analyze are listed below. Since the same pivot_longer() operation and
        visualization code will be used repeatedly for these sections, I created
        a function to avoid code duplication and follow the DRY (Don't Repeat
        Yourself) principle.
      </DefaultDiv>
      <CodeBlock language="R" text={longerAndGraph} />
      <NumberTitle style={{ paddingTop: 20 }}>
        1. Which kernel do you use most?
      </NumberTitle>
      <CodeBlock language="R" text={kernelCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={kernelPref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        2. Which cloud platform do you use most?
      </NumberTitle>
      <CodeBlock language="R" text={cloudCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={cloudPref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        3. Which language do you most prefer?
      </NumberTitle>
      <CodeBlock language="R" text={languageCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={languagePref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        4. Which ML library have you used?
      </NumberTitle>
      <CodeBlock language="R" text={mllibraryCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={mllibraryPref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        5. Which visualization tool do you most prefer?
      </NumberTitle>
      <CodeBlock language="R" text={vizCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={vizPref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        6. Which ML service have you used?
      </NumberTitle>
      <CodeBlock language="R" text={mlserviceCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={mlservicePref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        7. Which relational database do you most prefer?
      </NumberTitle>
      <CodeBlock language="R" text={rdbCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={rdbPref} />

      <NumberTitle style={{ paddingTop: 20 }}>
        8. Which big data tool have you used?
      </NumberTitle>
      <CodeBlock language="R" text={bigdataCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={bigdataPref} />

      <SemiTitle style={{ paddingTop: 40 }}>Data source Analysis</SemiTitle>
      <NumberTitle style={{ paddingTop: 20 }}>
        1. Which kind of data do you most unteract with?
      </NumberTitle>
      <CodeBlock language="R" text={whatDataCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={whatData} />

      <NumberTitle style={{ paddingTop: 20 }}>
        2. From where do you get your data?
      </NumberTitle>
      <CodeBlock language="R" text={whereDataCode} />
      <ChartImg style={{ width: 400, height: 400 }} src={whereData} />

      <SemiTitle style={{ paddingTop: 40 }}>Summary</SemiTitle>
      <DefaultDiv style={{ paddingTop: 0 }}>
        The Data Science field is heavily concentrated in the United States and
        India, with most other participants coming from developed countries.
        Most respondents are aged between 20 and 40, but there is still a
        notable share of those over 40. Around 90% of respondents have a STEM
        background and over 80% are male. More than 90% hold at least a
        bachelor’s degree, suggesting that the “non-technical entry” narrative
        may be overstated.
        <br />
        <br />
        Python is the dominant language, followed by R and SQL. Machine learning
        frameworks and visualization tools are broadly adopted, while
        open-source databases such as MySQL and PostgreSQL remain the most
        widely used. Very few respondents collect their own data — most rely on
        publicly available or pre-processed datasets.
      </DefaultDiv>
    </Container>
  );
}

export const ChartImg = styled.img`
  width: 1000px;
  height: 500px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const MajorImg = styled.img`
  width: 1000px;
  height: 1000px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ExperienceImg = styled.img`
  width: 1000px;
  height: 700px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const SalaryImg = styled.img`
  width: 500px;
  height: 700px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;

const exploration = `library(dplyr)
library(ggplot2)
library(tidyr)

MAIN_COLOR <- "#4E79A7"
ACCENT_COLOR <- "#3399FF"

response <- read.csv('multipleChoiceResponses.csv', skip = 1)
head(response)`;

const genderCode = `response$Gender <- as.factor(response$Gender)

ggplot(response, aes(x = Gender)) +
    geom_bar(aes(y = (..count..)/sum(..count..)), fill = MAIN_COLOR) +
    coord_flip() +
    scale_y_continuous(labels = scales::percent) +
    theme_minimal() +
    labs(
        title = "Gender Distribution (%)",
        x = "Gender",
        y = "Percentage"
    )`;
const countryCode = `top_10_country <- response |>
    group_by(Country) |>
    summarize(
        count = n()
    ) |>
    arrange(desc(count)) |>
    slice_head(n = 11)

top_10_country <- top_10_country[-4, ]
top_10_country$Country[1] = "US"
top_10_country$Country[7] = "UK"

ggplot(top_10_country, aes(x = reorder(Country, -count), y = count)) +
    geom_col(fill = MAIN_COLOR) +
    labs(
        title = "Country distribution of Respondents",
        x = "Country",
        y = "Count"
    ) `;
const ageCode = `response$Age <- as.factor(response$Age)
levels(response$Age)

ggplot(response, aes(x = Age)) +
    geom_bar(fill = MAIN_COLOR) +
    theme_minimal() +
    labs(
        title = "Age Group Distribution",
        x = "Age Group",
        y = "Count"
    )`;
const degreeCode = `response$Degree <- as.factor(response$Degree)
levels(response$Degree)[levels(response$Degree) == "Some college/university study without earning a bachelor’s degree"] <- "College/Univ without a degree"

degree_perc <- response |>
    count(Degree) |>
    mutate(perc = n / sum(n) * 100) |>
    arrange(desc(n))

degree_perc <- degree_perc[-6,]

ggplot(degree_perc, aes(x = reorder(Degree, perc), y = perc)) +
  geom_col(fill = MAIN_COLOR) +
  geom_text(aes(label = paste0(round(perc, 1), "%")),
            hjust = -0.1, size = 3.5) +
  coord_flip() +
  theme_minimal() +
  labs(
    title = "Degree Distribution (%)",
    x = "Degree",
    y = "Percentage"
  )`;

const majorCode = `response$Major <- as.factor(response$Major)

major_count <- response |>
    count(Major) |>
    mutate(perc = n / sum(n) * 100) |>
    arrange(desc(perc)) |>
    slice_head(n = 5)

ggplot(major_count, aes(x = "", y = perc, fill = Major)) +
  geom_col(width = 1, color = "white") +
  coord_polar(theta = "y") +
  geom_text(aes(label = paste0(round(perc, 1), "%")),
            position = position_stack(vjust = 0.5),
            color = "white", size = 3) +
  theme_void() +
  labs(title = "Major Distribution (%)")`;

const longerAndGraph = `longer_data <- function(df, name) {
    df |> pivot_longer(
        cols = everything(),
        names_to = name,
        values_to = "Selected"
    ) |>
    filter(Selected != "")
}
    
# Helper function to create horizontal percentage bar charts
percentage_bargraph <- function(df, col, title, xlab) {
    graph <- df |> 
        count({{ col }}) |>
        mutate(perc = round(n / sum(n) * 100, 1)) |>
        arrange(desc(perc)) |>
        ggplot(aes(x = reorder({{ col }}, perc), y = perc)) +
        geom_col(fill = ACCENT_COLOR) +
        geom_text(aes(label = paste0(perc, "%")),
              hjust = 0.2, size = 3.5) +
        coord_flip() +
        theme_minimal() + 
        labs(
            title = title,
            x = xlab,
            y = "Percentage"
        )

    attr(graph, "width") <- 40
    attr(graph, "height") <- 6
    
    return(graph)
}`;

const kernelCode = `response_kernel <- response[, 46:56]
colnames(response_kernel) <- c("Kaggle kernels", "Google Colab", "Azure Notebook", "Domino Datalab", "GCP Datalab",
                               "Parperspace", "Folydhub", "Crestle", "JupyterHub Binder", "None", "Other")

kernel_long <- longer_data(response_kernel, "Kernel")

kernel_long <- kernel_long |>
    filter(Selected != "None")

kernel_long$Selected <- as.factor(kernel_long$Selected)
levels(kernel_long$Selected)

percentage_bargraph(kernel_long, Selected, "Kernel Preference (%)", "Kernel Type")`;

const cloudCode = `response_cloud <- response[, 58:64]

colnames(response_cloud) <- c("GCP", "AWS", "Azure", "IBM Cloud", "Alibaba Cloud", "None", "Other")

cloud_long <- longer_data(response_cloud, "Cloud")

cloud_long$Selected <- as.factor(cloud_long$Selected)
levels(cloud_long$Selected)

percentage_bargraph(cloud_long, Selected, "Cloud Preference (%)", "Cloud Type")`;

const languageCode = `response_language <- response[, 66:83]

colnames(response_language) <- c("Python", "R", "SQL", "Bash", "Java", "Javascript",
                                 "VBA", "C", "Matkab", "Scala", "Julia", "Go", ".NET", 
                                 "PHP", "Ruby", "STATA", "None", "Other")

language_long <- longer_data(response_language, "Language")

language_long$Selected <- as.factor(language_long$Selected)
levels(language_long$Selected)

percentage_bargraph(language_long, Selected, "Language Preference (%)", "Language")`;

const mllibraryCode = `response_ml_framework <- response[, 89:107]
colnames(response_ml_framework) <- c("Scikit Learn", "TensorFlow", "Keras", "Pytorch", "Spark MLlib", "H20",
                                     "H20", "Fastai", "Mxnet", "Caret", "Xgboost", "mlr", "Prophet", 
                                     "randomForest", "lightgbm", "catboost", "CNTK", "Caffe", "None")

ml_framework_long <- longer_data(response_ml_framework, "ML Framework")

ml_framework_long$Selected <- as.factor(ml_framework_long$Selected)
levels(ml_framework_long$Selected)

percentage_bargraph(ml_framework_long, Selected, "ML Library Preference (%)", "Language")`;

const vizCode = `response_visualize <- response[, 111: 122]
colnames(response_visualize) <- c("ggplot2", "Matplotlib", "Altair", "Shiny", "D3", "Plotly",
                                  "Bokeh", "Seaborn", "Geoplotlib", "Lattice", "None", "Other")

visualize_long <- longer_data(response_visualize, "Viz tool")

visualize_long$Selected <- as.factor(visualize_long$Selected)
levels(visualize_long$Selected)

percentage_bargraph(visualize_long, Selected, "Viz Tool Preference (%)", "Viz tool")`;

const mlserviceCode = `response_ml_service <- response[, 152: 192]

colnames(response_ml_service) <- c("AWS Transcribe", "GCP STT", "AWS Rekognition", "GCP Vision", "AWS Comprehend", "GCP NLP",
                                   "AWS Translate", "GCP Translation", "AWS Lex", "Google Dialogflow", "AWS Rekognition Video", "GCP Video intelligence", 
                                   "GCP AutoML", "AWS SageMaker", "GCP ML Engine", "DataRobot", "H20 Driverless AI", "Domino Datalab", "SAS",
                                   "Dataiku", "RapidMiner", "Instabase", "Algorithmia", "Dataversity", "Cloudera",
                                   "Azure ML Studio", "Azure ML workbench", "Azure Cortana intelligence", "Azure Bing Speech",
                                   "Azure Speaker Rekognition", "Azure Vision", "Azure Face", "Azure Video", "IBM Studio",
                                   "IBM Knowledge Catalog", "IBM Assistant", "IBM Discovery", "IBM STT", "IBM Viz Rekognition", "IBM ML", "Azure Cognitive")

ml_service_long <- longer_data(response_ml_service, "ML Service")

ml_service_long$Selected <- as.factor(ml_service_long$Selected)
levels(ml_service_long$Selected)

percentage_bargraph(ml_service_long, Selected, "ML Service Preference (%)", "ML Service")`;

const rdbCode = `response_RDB <- response[, 196: 221]
colnames(response_RDB) <- c("AWS RDB", "AWS Aurora", "GCP SQL", "GCP Sapnner", "AWS DynamoDB", "GCP Datastore",
                            "GCP Bigtable", "AWS SimpleDB", "MS SQL Server", "MySQL", "PostgreSQL", "SQLite", 
                            "Oracle", "Ingres", "MS Access", "NexusDB", "SAP IQ", "Googld Fusion", "Azure MySQL",
                            "Cosmos DB", "Azure SQL", "Azure PostgreSQL", "IBM compose", "IBM MySQL", "IBM PostgreSQL", "IBM DB2")

RDB_long <- longer_data(response_RDB, "RDB")

RDB_long$Selected <- as.factor(RDB_long$Selected)
levels(RDB_long$Selected)

percentage_bargraph(RDB_long, Selected, "RDB Preference (%)", "RDB")`;

const bigdataCode = `response_bigdata <- response[, 225: 247]
colnames(response_bigdata) <- c("AWS MapReduce", "AWS Batch", "GCP Dataproc", "GCP Dataflow", "GCP Dataprep", "AWS Kinesis",
                                "GCP Pub Sub", "AWS Athena", "AWS Redshift", "GCP BigQuery", "Teradata", "MS Analysis",
                                "Oracle Exadata", "Oracle Warehouse Builder", "SAP IQ", "Snowflake", "Databricks", "Azure SQL Data Warehouse",
                                "Azure HDInsight", "Azure Stream Analytics", "IBM Infosphere DataStorage", "IBM Cloud Analytics", "IBM Streaming Analytics")

bigdata_long <- longer_data(response_bigdata, "big data")

bigdata_long$Selected <- as.factor(bigdata_long$Selected)
levels(bigdata_long$Selected)

percentage_bargraph(bigdata_long, Selected, "Big data tool Preference (%)", "Big data tool")`;

const whatDataCode = `response_what_data <- response[, 251: 262]
colnames(response_what_data) <- c("Audio", "Categorical", "Genetic", "Goespatial", "Image", "Numerical",
                                  "Sensor", "Tabular", "Text", "Time series", "Video", "Other")

what_data_long <- longer_data(response_what_data, "Data Type")

what_data_long$Selected <- as.factor(what_data_long$Selected)
levels(what_data_long$Selected)

percentage_bargraph(what_data_long, Selected, "What data do you interect with (%)", "Data Type")`;

const whereDataCode = `response_where_data <- response[, 266: 276]
colnames(response_where_data) <- c("Governement websites", "Univ research websites", "Non profit Research websites", "Kaggle", "Scraping",
                                   "Public data from private companies", "Google Search", "Google Dataset", "Github", "No public data", "Other")

where_data_long <- longer_data(response_where_data, "Where")

where_data_long$Selected <- as.factor(where_data_long$Selected)
levels(where_data_long$Selected)

percentage_bargraph(where_data_long, Selected, "Where do you get data from (%)", "Where")`;
