import React from 'react';
import './App.css';
import LogACourse from './components/LogACourse.js';
import StudentList from './components/students/StudentList.js';
import CourseList from './components/courses/CourseList.js';

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
        <LogACourse />
        {/* <StudentList /> */}
        <CourseList />
      </div>
    );
  }
}

export default App;
