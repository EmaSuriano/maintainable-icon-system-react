import ReactDOM from 'react-dom';
import React from 'react';
import { Logo, LogoWithWeirdName } from './components/Icon';

const App = () => (
  <div>
    <h1>My Amazing logo!</h1>
    <Logo />
    <LogoWithWeirdName />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
