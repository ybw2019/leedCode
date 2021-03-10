import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import { GlobalStyleIcon } from './static/iconfont/iconfont';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <GlobalStyleIcon />
    <App />
  </React.Fragment>
  ,
  document.getElementById('root')
);

