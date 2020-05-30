import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import CompsList from "./components/CompsList";
import CompDetail from "./components/CompDetail";
import ChampionsList  from "./components/ChampionsList";

function App() {
  return (
    <Router>
      <main>
        <h1>App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/comps">Comps</Link>
            </li>
            <li>
              <Link to="/champions">Champions</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={CompsList} />
          <Route path="/comps/:id" component={CompDetail} />
          <Route path="/comps" component={CompsList} />
          <Route path="/champions" component={ChampionsList} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
