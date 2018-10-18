import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from "react-router-dom"
import Rounds from './Rounds';

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
        await this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to='/users/1' />)
        }
        return (
            <div>
                <h1>{this.state.fish.name}</h1>
                <Link to={`/users/${this.props.match.params.user_id}`}> User</Link>
                <br />
                <Rounds fishId={this.props.match.params.fish_id} />
                <button onClick={this.deleteFish}> Delete Fish </button>
            </div>
        );
    }
}

export default FishProfile;