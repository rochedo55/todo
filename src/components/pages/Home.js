import React from 'react';
import {
    Link
  } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>hello da home <Link to="/About"> Ir para About</Link></div>
    }
}

export default Home;
