import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import CompsList from "./components/CompsList";
import CompDetail from "./components/CompDetail";
import ChampionDetail from "./components/ChampionDetail";
import ChampionsList from "./components/ChampionsList";
import { findAll } from "./data/champions";

function App() {
  return (
    <Router>
      <main>
        <h1>App</h1>
        <nav>
          <ul className={"horizontal"}>
            <li>
              <Link to="/comps">Comps</Link>
            </li>
            <li>
              <Link to="/champions">Champions</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/comps/:id" component={CompDetail} />
          <Route path="/comps" component={CompsList} />
          <Route path="/champions/:id" component={ChampionDetail} />
          <Route
            path="/champions"
            render={({ history }) => (
              <ChampionsList finder={findAll} history={history} />
            )}
          />
          <Route path="/" exact component={CompsList} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
