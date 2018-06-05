import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import FishList from './FishList';

class UserProfile extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        const userId = this.props.match.params.user_id
        console.log("GETTING A USER", userId)
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        await this.setState({ user: res.data })
    }
    render() {
        return (
            <div>
                {this.state.user.first_name}
                <Link to="/"> Home </Link>
                <FishList userId={this.props.match.params.user_id} />
            </div>
        );
    }
}

export default UserProfile;