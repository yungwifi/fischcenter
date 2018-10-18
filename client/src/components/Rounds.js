import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const RoundStyled = styled.div`
display: flex;
flex-direction: row;
margin-left: 10px;`

class Rounds extends Component {
    state = {
        rounds: [],
        roundsTotal: 0

    }

    componentDidMount = async () => {
        this.getRounds()
    }

    getRoundsTotal = async () => {
        var roundOne = await this.state.rounds[0].round_one
        var roundTwo = await this.state.rounds[0].round_two
        var roundThree = await this.state.rounds[0].round_three
        var bonusRound = await this.state.rounds[0].bonus_round
        var roundTotal = roundOne + roundTwo + roundThree + bonusRound
        this.setState({ roundsTotal: roundTotal })
    }

    getRounds = async () => {
        const fishId = this.props.fishId
        const res = await axios.get(`/api/users/2/fish/${fishId}/rounds`)
        await this.setState({ rounds: res.data })
        await this.getRoundsTotal()

    }

    handleChange = (updatedRound, e) => {
        const rounds = [...this.state.rounds]
        const newRound = rounds.map((round) => {
            if (round.id === updatedRound.id) {
                rounds[e.target.name] = e.target.value
            }
            return rounds
        })
        console.log("HANDLE CHANGE", e.target.value)
        this.setState({ rounds: newRound })
    }

    updateScore = async (roundsId) => {
        const fishId = this.props.fishId
        const updatedRound = this.state.rounds
        const roundId = this.state.rounds.id
        console.log("-UPDATED ROUND-", updatedRound, "-FISH ID-", fishId, "-ROUND ID-", roundId)
        const res = await axios.patch(`/api/users/1/fish/${fishId}/rounds/${roundId}`, updatedRound, { roundsId })
        console.log("POSTING NEW ROUND", res)
        await this.setState({ rounds: res.data })
    }

    render() {
        return (
            <div>
                {/* {rounds} */}
                <RoundStyled >
                    <div> Round 1 {this.state.rounds.id} <input onChange={(e) => { this.handleChange(this.state.rounds, e) }}
                        name="round_one" type="text" value={this.state.rounds.round_one}
                        onBlur={() => this.updateScore(this.state.rounds.id)} /></div>
                    <div> Round 2 <input onChange={(e) => { this.handleChange(this.state.rounds, e) }}
                        name="round_two" type="text" value={this.state.rounds.round_two}
                        onBlur={() => this.updateScore(this.state.rounds.id)} /> </div>
                    <div> Round 3 <input onChange={(e) => { this.handleChange(this.state.rounds, e) }}
                        name="round_three" type="text" value={this.state.rounds.round_three}
                        onBlur={() => this.updateScore(this.state.rounds.id)} /></div>
                    <div> Bonus Round <input onChange={(e) => { this.handleChange(this.state.rounds, e) }}
                        name="bonus_round" type="text" value={this.state.rounds.bonus_round}
                        onBlur={() => this.updateScore(this.state.rounds.id)} /></div>
                    <div>Total: {this.state.roundsTotal}</div>
                </RoundStyled>
            </div>
        );
    }
}

export default Rounds;