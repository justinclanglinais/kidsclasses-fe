import React from 'react';
import './App.css';
import StudentList from './components/StudentList.js';
import DateSelector from './components/DateSelector.js';
import SubmitButton from './components/SubmitButton.js';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      route: "",
      input: ""
    }
  }
  render () {
    return (
      <div className="App">
        <StudentList />
        <DateSelector />
        <SubmitButton />
      </div>
    );
  }
}

export default App;
