import React from 'react';
import logo from './logo.svg';
import './App.css';

import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Title from "./components/Title";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }

    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  createTask(title) {
    this.setState({
      task: this.state.tasks.push({title: title}),
    });
  }

  removeTask(index) {
    this.setState({
      task: this.state.tasks.splice(index, 1),
    });
  }
  
  render() {
    return (
      <div className='app'>
        <Title></Title>
        <CreateTask createTask={this.createTask}></CreateTask>
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask}></TaskList>
      </div>
    );
  }
}

export default App;
