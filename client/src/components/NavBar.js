import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyled = styled.div`
width: 99vw;
height: 15vh;
background-color: grey;`


class NavBar extends Component {
    render() {
        return (
            <NavStyled >
                <Link to="/fish"> Fish </Link>
                <Link to="/users"> Users </Link>
            </NavStyled>
        );
    }
}

export default NavBar;