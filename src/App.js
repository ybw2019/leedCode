import React, { PureComponent } from 'react';
import { GlobalStyle } from './style/style';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Head/index';
import Home from './pages/home';
import Login from './pages/page0/index';
import Solution from './pages/page5/index';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/problem" exact component={Solution}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
