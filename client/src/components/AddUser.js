import React, { Component } from 'react'
import axios from 'axios'

class AddUser extends Component {
    state = {
        user: {
            first_name: '',
            last_name: ''
        }
    }

    handleChange = (e) => {
        const user = { ...this.state.user }
        console.log("PHOTO", user)
        user[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ user })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name
        }
        console.log("HANDLE SUBMIT", newUser)
        this.addUser(newUser)
    }

    addUser = async (newUser) => {
        const res = await axios.post(`/api/users`, newUser)
        await console.log("RESPONSE FROM NEW USER BEING ADDED", res.data)
        await this.setState({ user: res.data.user })
        await this.props.getUsers()
    }

    render() {
        return (
            <div>
                <h4> Add New User </h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" onChange={this.handleChange} />
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" onChange={this.handleChange} />
                    <button type="submit"> Add User </button>
                </form>
            </div>
        );
    }
}

export default AddUser;