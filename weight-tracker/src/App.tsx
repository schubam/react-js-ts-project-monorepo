import React from "react";
import "./App.css";
import WeekList from "./components/WeekList";
import { weeknumber } from "./components/weeknumber";

const currentWeek = weeknumber(new Date());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
      <WeekList week={currentWeek - 2} />
      <WeekList week={currentWeek - 1} />
      <WeekList week={currentWeek} highlight/>
    </div>
  );
}

export default App;
