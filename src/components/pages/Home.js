import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>hello da home <Link to="/About">aaa</Link></div>
    }
}

export default Home;
