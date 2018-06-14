import React, { Component } from 'react';
import axios from 'axios';

class Rounds extends Component {
    state = {
        rounds: []
    }

    componentDidMount() {
        this.getRounds()
    }

    getRounds = async () => {
        const fishId = this.props.fishId
        console.log("FISH ID", fishId)
        const res = await axios.get(`/api/users/1/fish/${fishId}/rounds`)
        console.log("GETTING ROUND", res.data)
        await this.setState({ rounds: res.data })

    }
    render() {
        const rounds = this.state.rounds.map((round, i) => {
            return (
                <div key={i}>
                    <div> Round 1 {round.round_one} </div>
                    <div> Round 2 {round.round_two} </div>
                    <div> Round 3 {round.round_three} </div>
                    <div> Bonus Round {round.bonus_round} </div>
                </div>
            )
        })
        return (
            <div>
                {rounds}
            </div>
        );
    }
}

export default Rounds;