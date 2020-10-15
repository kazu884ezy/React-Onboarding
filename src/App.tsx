import React from 'react';
//import history from './history';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import OverTime from "./pages/OverTime";
import SpecificDate from "./pages/SpecificDate";
import GlobalMenu from "./layouts/GlobalMenu";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <div className="App">
        <Router>
          <GlobalMenu />
          <div className="main">
            <Switch>
              <Route path="/exchange-rates" component={OverTime} />
              <Route path="/exchange-rates-at-a-specific-date" component={SpecificDate} />
              <Route path="/" exact component={OverTime} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
