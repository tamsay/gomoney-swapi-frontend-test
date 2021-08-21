import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from '../src/components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import ViewAll from './Pages/ViewAll/ViewAll';

import SwapiContextProvider from '../src/context/index';

function App() {

  return (
    <div className="App">
      <SwapiContextProvider>
        <Router>
      <Header />
          <Switch>

              <Route exact path="/">
              <HomePage />
              </Route>
              <Route path="/details-page">
                <DetailsPage />
            </Route>
            <Route exact path="/view-all/">
              <ViewAll />
            </Route>

          </Switch>
        </Router>
        
      </SwapiContextProvider>
    </div>
  );
}

export default App;
