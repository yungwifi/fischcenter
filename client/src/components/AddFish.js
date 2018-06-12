import React, { Component } from 'react'
import axios from 'axios'

class AddUser extends Component {
    state = {
        fish: {
            name: ''
        }
    }

    handleChange = (e) => {
        const fish = { ...this.state.fish }
        console.log("PHOTO", fish)
        fish[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ fish })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newFish = {
            name: this.state.fish.name
        }
        console.log("HANDLE SUBMIT", newFish)
        this.addFish(newFish)
    }

    addFish = async () => {
        const userId = this.props.userId
        const res = await axios.post(`/api/users/${userId}/fish`)
        await console.log("RESPONSE FROM NEW FISH BEING ADDED", res.data)
        await this.setState({ fish: res.data })
        await this.props.getUsers()
    }

    render() {
        return (
            <div>
                <h4> Add New Fish </h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <button type="submit"> Add Fish </button>
                </form>
            </div>
        );
    }
}

export default AddUser;