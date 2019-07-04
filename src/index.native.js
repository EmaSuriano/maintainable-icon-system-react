import React from 'react';
import { Alert } from 'react-native';
import Grid from './components/Grid';
import * as Icons from './components/Icon';
import randomColor from 'randomcolor';

const App = () => (
  <Grid>
    {Object.entries(Icons).map(([name, Icon]) => (
      <Icon
        key={name}
        color={randomColor()}
        onPress={() => Alert.alert(`<${name} />`)}
      />
    ))}
  </Grid>
);

export default App;
