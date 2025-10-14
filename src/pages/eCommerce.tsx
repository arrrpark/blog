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
  customerPairplot,
  commerceHeatMap,
  linearEval,
  linearModel,
} from '../images/ecommerce';

export default function Bike() {
  return (
    <Container>
      <BigTitle>
        Analysis and applying linear regression on customers' data
      </BigTitle>
      <DefaultDiv>
        The primary objective of this project is to make a linear regression
        model on customers' spend amount based on provided data.
      </DefaultDiv>
      <SemiTitle>This project uses data from Kaggle</SemiTitle>
      <div>
        <a
          target="_blank"
          href="https://www.kaggle.com/datasets/kolawale/focusing-on-mobile-app-or-website"
        >
          https://www.kaggle.com/datasets/kolawale/focusing-on-mobile-app-or-website
        </a>
      </div>
      <MenuDiv>
        Here is the description of all variables.
        <div>- email: customers' email address</div>
        <div>- address: customers' address</div>
        <div>- avatar: customers' avatar </div>
        <div>
          - Average session length: averate time spent per each session(mins)
        </div>
        <div>- Time on app: the time customer spent on the application</div>
        <div>
          - Time on website: the time customer spent on the website(mins)
        </div>
        <div>- Length of Membership: customer length of membership</div>
        <div>- Year amount spent: total purchase amount by the customer</div>
      </MenuDiv>
      <SemiTitle>Used tools & Algorithms</SemiTitle>
      <MenuDiv>- Pandas, Numpy, Scipy, Seaborn and Sklearn</MenuDiv>
      <SemiTitle>Data analysis & visualization</SemiTitle>

      <NumberTitle>
        {' '}
        1. Visualize paired plots of numerical variables.
      </NumberTitle>
      <CodeBlock language="python" text={pairPlotCode} />
      <ChartImg src={customerPairplot} style={{ height: 800 }} />
      <DefaultDiv>
        <div>
          - Remove useless data for pair plotting like email, address and
          avatar.
        </div>
        <div>
          - A linear correlation is clearly seen between 'Length of membership'
          and 'Year amount spent'.
        </div>
        <div>
          - A linear correlation is seen beween 'Time on App' and 'Year amount
          spent', but it's less evident than 'Length of membership'
        </div>
      </DefaultDiv>

      <NumberTitle> 2. Make a heatmap of numerical variables.</NumberTitle>
      <CodeBlock language="python" text={heapMapCode} />
      <ChartImg src={commerceHeatMap} style={{ height: 600 }} />
      <DefaultDiv>
        <div>These are top 3 correlation shown in the heatmap.</div>
        <div>- Length of membership - Year amount spent: 0.81</div>
        <div>- Time on app - Year amount spent: 0.5</div>
        <div>- Average session length - Year amount spent: 0.36</div>
      </DefaultDiv>

      <NumberTitle>
        {' '}
        3. Make a linear regression model following Pareto principle.
      </NumberTitle>
      <CodeBlock language="python" text={linearCode} />
      <ChartImg src={linearModel} style={{ width: 500, height: 150 }} />
      <DefaultDiv>
        <div>
          Above code made a linear regrssion model utilizing pareto principle{' '}
        </div>
        <div>
          : 80% of the data will be used for training the model and 20% will be
          used for evaluation.{' '}
        </div>
      </DefaultDiv>

      <NumberTitle>
        {' '}
        4. Evalute the model using RSME and predict new customers' yearly amount
        spent.
      </NumberTitle>
      <CodeBlock language="python" text={linearEvaCode} />
      <ChartImg src={linearEval} style={{ width: 500, height: 50 }} />
      <DefaultDiv>
        <div>RSME and predicted values may differ slightly upon trying.</div>
      </DefaultDiv>
    </Container>
  );
}

const ChartImg = styled.img`
  width: 1000px;
  height: 600px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;

const pairPlotCode = `file = pandas.read_csv('customers.csv')
df = file.drop(["Email", "Address", "Avatar"], axis = 1)

seaborn.pairplot(df, corner=True)`;

const heapMapCode = `cor_matrix = df.corr()
pyplot.figure(figsize=(15,5))
axe = seaborn.heatmap(cor_matrix, annot=True)
axe.set_xticklabels(axe.get_xticklabels(), rotation=45, horizontalalignment='right')`;

const linearCode = `linearx = df.iloc[:,:-1]
lineary = df['Yearly Amount Spent']

linear_x_train, linear_x_test, linear_y_train, linear_y_test = train_test_split(linearx,lineary,test_size=0.25)

LinearReg = LinearRegression()
Linearmodel = LinearReg.fit(linear_x_train,linear_y_train)

Coef = Linearmodel.coef_
Intercept = Linearmodel.intercept_
Linearmodel_list = [Intercept]+list(Coef)
Linear_model = pandas.DataFrame(Linearmodel_list, index = ["Intercept", "Avg Session Length", "Time on App", "Time on Website",'Length of Membership'],columns=["Linear Model"])
print(Linear_model)`;

const linearEvaCode = `r2 = Linearmodel.score(linear_x_test, linear_y_test)
linear_y_predict = Linearmodel.predict(linear_x_test)
mse = mean_squared_error(linear_y_test, linear_y_predict)
print(mse)

new_customer1 = ([[35,15,30,2]])
new_customer2 = ([[40,20,20,4]])
amount1 = int(Linearmodel.predict(new_customer1))
amount2 = int(Linearmodel.predict(new_customer2))
print("Customer1's yearly spent amount is most likely $" + str(amount1))
print("Customer2's yearly spent amount is most likely $" + str(amount2))`;
