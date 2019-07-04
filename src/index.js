import ReactDOM from 'react-dom';
import React from 'react';
import { WhiteHouse, EiffelTower } from './components/Icon';
import Landmark from './components/Landmark';
import Grid from './components/Grid';
import Layout from './components/Layout';
import Title from './components/Title';

const App = () => (
  <Layout>
    <Title>Landmark of the world</Title>
    <Grid>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white" />
      </Landmark>
    </Grid>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById('root'));
