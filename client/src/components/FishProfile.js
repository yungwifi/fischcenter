import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from "react-router-dom"

class FishProfile extends Component {
    state = {
        fish: {},
        redirect: false
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

    deleteFish = async () => {
        const userId = this.props.match.params.user_id
        const fishId = this.props.match.params.fish_id
        const res = await axios.delete(`/api/users/${userId}/fish/${fishId}`)
        console.log("RESPONSE FROM FISH DELETING", res.data)
        await this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to='/users' />)
        }
        return (
            <div>
                {this.state.fish.name}
                <Link to={`/users/${this.props.match.params.user_id}`}> User</Link>
                <button onClick={this.deleteFish}> Delete Fish </button>
            </div>
        );
    }
}

export default FishProfile;