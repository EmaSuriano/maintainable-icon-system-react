import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import * as Icons from './components/Icon';
import randomColor from 'randomcolor';

const App = () => (
  <Grid>
    {Object.entries(Icons).map(([name, Icon]) => (
      <Icon color={randomColor()} onClick={() => alert(`<${name} />`)} />
    ))}
  </Grid>
);

ReactDOM.render(<App />, document.getElementById('root'));
