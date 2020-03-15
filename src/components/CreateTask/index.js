import React from 'react';

import './index.css';

class CreateTask extends React.Component {
    createTask() {
        let title = document.getElementById('create-task-input').value;
        this.props.createTask(title);
    }

    render() {
        return (<div className='create-task'>
            <button
                className='create-task-btn'
                onClick={() => this.createTask()}
            >
                Create Task
            </button>
            <input
                id='create-task-input'
                type='text'
                placeholder='task title'>
            </input>
        </div>);
    }
}

export default CreateTask;