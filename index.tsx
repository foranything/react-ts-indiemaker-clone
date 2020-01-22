import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './navs/Header';
import './style.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { About, Products, Todos, Makers, Launched, Home } from './pages'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/todos" component={Todos} />
            <Route path="/makers" component={Makers} />
            <Route path="/launched" component={Launched} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
