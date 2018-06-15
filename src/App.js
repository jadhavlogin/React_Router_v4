import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Link  } from 'react-router-dom';

import Calculator from './appOne/Calculator';
import Feeds from './appTwo/Feeds';
import AppFour from './appFour/AppFour';
import AppThree from './appThree/AppThree';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <BrowserRouter>
            <div>
              <h2 className="App-title">Welcome to React Router 4</h2>
              <p className="NavigationLinks">
                  <span><Link to={'/calculator'}>Calculator</Link></span>
                  <span><Link to={'/feed'}>Feed</Link></span>
                  <span><Link to={'/appThree'}>App three</Link></span>
                  <span><Link to={'/appFour'}>App four</Link></span>
               </p>
                <hr />
                <Switch>
                    <Route exact path='/calculator' component={Calculator} />
                    <Route exact path='/feed' component={Feeds} />
                    <Route exact path='/appThree' component={AppThree} />
                    <Route exact path='/appFour' component={AppFour} />
                </Switch>
              </div>
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;
