import React, { Component } from 'react';

import styled from 'styled-components'
import NavBar from './NavBar';

const Header = styled.div`
background-image: url('https://i.imgur.com/6uz5q2a.gif');
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
h1{
    color: whitesmoke;
}`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header >
                </Header>
            </div>
        );
    }
}

export default HomePage;