import React, { Component } from 'react';
import axios from 'axios';

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
                    <div> {fish.name} </div>
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