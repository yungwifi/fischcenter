import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

class FishProfile extends Component {
    state = {
        fish: {}
    }

    componentDidMount() {
        this.getOneFish()
    }

    getOneFish = async () => {
        const userId = this.props.match.params.user_id
        const fishId = this.props.match.params.fish_id
        const res = await axios.get(`/api/users/${userId}/fish/${fishId}`)
        await this.setState({ fish: res.data })
    }
    render() {
        return (
            <div>
                {this.state.fish.name}
                <Link to={`/users/${this.props.match.params.user_id}`}> User</Link>
            </div>
        );
    }
}

export default FishProfile;