import React, { Component } from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import NavBar from './components/layout/Navbar'
import Index from './components/layout/Index'
import { Provider } from './context';
import Lyric from './components/tracks/Lyric';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route path='/' component={Index} exact/>
                <Route path='/lyric/track/:id' component={Lyric} exact/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
