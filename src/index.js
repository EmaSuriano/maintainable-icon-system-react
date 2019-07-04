import ReactDOM from 'react-dom';
import React from 'react';
import * as Icons from './components/Icon';
import Grid from './components/Grid';
import randomColor from 'randomcolor';

const App = () => (
  <Grid>
    {Object.entries(Icons).map(([name, Icon]) => (
      <Icon color={randomColor()} onClick={() => alert(`<${name} />`)} />
    ))}
  </Grid>
);

ReactDOM.render(<App />, document.getElementById('root'));
