import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/navigationBar";
import TimeTable from "./components/timetable";

function App() {
  return (
    <div>
      <TimeTable/>
    </div>
  );
}

export default App;
