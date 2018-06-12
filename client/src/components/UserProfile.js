import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from "react-router-dom"
import FishList from './FishList'
import AddFish from './AddFish'

class UserProfile extends Component {
    state = {
        user: {},
        redirect: false,
        addFishForm: false
    }

    componentDidMount() {
        this.getUser()
    }

    toggleFishForm = () => {
        console.log("Fish Form State Change")
        this.setState({
            addFishForm: true
        })
    }

    getUser = async () => {
        const userId = this.props.match.params.user_id
        console.log("GETTING A USER", userId)
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        await this.setState({ user: res.data })
    }

    deleteUser = async () => {
        const userId = this.props.match.params.user_id
        const res = await axios.delete(`/api/users/${userId}/`)
        console.log("RESPONSE FROM USER DELETING", res.data)
        await this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/users" />)
        }
        return (
            <div>
                {this.state.user.first_name}
                <Link to="/"> Home </Link>
                <FishList userId={this.props.match.params.user_id} />
                <button onClick={this.deleteUser}> Delete User </button>
                <button onClick={this.toggleFishForm}> Add Fish </button>
                {this.state.addFishForm ? (<AddFish userId={this.state.user.id} getUser={this.getUser} />) : null}
            </div>
        );
    }
}

export default UserProfile;