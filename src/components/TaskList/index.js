import React from 'react';

import './index.css';

class TaskList extends React.Component {
    renderTasks() {
        let output = [];
        for(let i=0; i < this.props.tasks.length; i++) {
            let elem = this.props.tasks[i];
            output.push((
                <div key={i} className='task'>
                    <button className='remove-task-btn' onClick={() => this.props.removeTask(i)}>X</button>
                    <p >{elem.title}</p>
                </div>
            ));
        }
        return output;
    }

    render() {
        return (
            <div className='task-list'>
                <div className='task-line'></div>
                <div className='tasks'>
                    {this.renderTasks()}
                </div>
            </div>
        );
    }
}

export default TaskList;