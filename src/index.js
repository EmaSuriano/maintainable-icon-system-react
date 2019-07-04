import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components';
import { WhiteHouse, EiffelTower } from './components/Icon';
import Landmark from './components/Landmark';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20vw;
`;


const App = () => (
  <Layout>
    <h1>Landmark of the world</h1>
    <Grid>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
      <Landmark label="🇺🇸" background="blue">
        <WhiteHouse color="white" />
      </Landmark>
      <Landmark label="🇮🇹" background="green">
        <EiffelTower color="white"/>
      </Landmark>
    </Grid>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById('root'));
