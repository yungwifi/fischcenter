import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom"

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        console.log("GETTING USERS")
        const res = await axios.get('api/users')
        console.log("RESPONSE FROM DATABASE", res)
        await this.setState({ users: res.data })

    }
    render() {
        const userList = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/users/${user.id}`}><div>{user.first_name}</div></Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Users</h1>
                <div> {userList} </div>
            </div>
        );
    }
}

export default Users;