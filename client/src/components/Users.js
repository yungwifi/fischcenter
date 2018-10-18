import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddUser from './AddUser'

class Users extends Component {
    state = {
        users: [],
        addUserForm: false,
    }

    componentDidMount() {
        this.getUsers()
    }

    toggleUserForm = () => {
        this.setState({
            addUserForm: !this.state.addUserForm
        })
    }

    getUsers = async () => {
        const res = await axios.get('api/users')
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
                <button onClick={this.toggleUserForm}> Add User </button>
                {this.state.addUserForm ? (<AddUser getUsers={this.getUsers} />) : null}
            </div>
        );
    }
}

export default Users;