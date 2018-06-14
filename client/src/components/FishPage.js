import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class FishPage extends Component {
    state = {
        fish: []
    }

    componentDidMount() {
        this.getFish()
    }

    getFish = async () => {
        const res = await axios.get('/api/users/1/fish')
        await this.setState({ fish: res.data })
    }

    render() {
        const fishies = this.state.fish.map((fish, i) => {
            return (<div key={i}>
                <Link to={`1/fish/${fish.id}`}><div> {fish.name} </div></Link>
            </div>
            )
        })
        return (
            <div>
                Fish
                {fishies}
            </div>
        );
    }
}

export default FishPage;