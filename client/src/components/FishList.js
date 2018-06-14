import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rounds from './Rounds'
import styled from 'styled-components'

const FishStyled = styled.div`
display: flex;
flex-direction: row;`

class FishList extends Component {
    state = {
        fish: []
    }

    componentDidMount() {
        this.getFish()
    }

    getFish = async () => {
        const userId = this.props.userId
        console.log("USER ID", userId)
        const res = await axios.get(`/api/users/${userId}/fish`)
        console.log("RESPONSE FROM DB", res)
        await this.setState({ fish: res.data })
    }

    render() {
        const userFishList = this.state.fish.map((fish, i) => {
            return (
                <div key={i}>
                    <FishStyled >
                        <Link to={`${this.props.userId}/fish/${fish.id}`}><div> {fish.name} </div></Link>
                        <Rounds fishId={fish.id} />
                    </FishStyled>
                </div>
            )
        })
        return (
            <div>
                {userFishList}
            </div>
        );
    }
}

export default FishList;