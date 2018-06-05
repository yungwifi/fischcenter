import React, { Component } from 'react';
import { Link } from "react-router-dom"

class HomePage extends Component {
    render() {
        return (
            <div>
                HomePage
                <Link to="/fish"> Fish </Link>
                <Link to="/users"> Users </Link>
            </div>
        );
    }
}

export default HomePage;