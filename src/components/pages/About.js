import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <h1>About!!!</h1>
            <p>Developed by <a href="https://github.com/rochedo55">Gabriel</a> and <a href="https://github.com/NalbertLeal">Nalbert</a> for the discipline of Special Topics for Software Engineering I</p>
            
        </div>
    }
}

export default About;
