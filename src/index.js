import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components';
import { WhiteHouse, EiffelTower } from './components/Icon';
import Landmark from './components/Landmark';

const Grid = styled.div`
  display: flex;
`;

const App = () => (
  <div>
    <h1>Landmark of the world</h1>
    <Grid>
      <Landmark label="🇺🇸">
        <WhiteHouse />
      </Landmark>
      <Landmark>
        <EiffelTower />
      </Landmark>
    </Grid>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
