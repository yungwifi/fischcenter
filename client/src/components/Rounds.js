import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const RoundStyled = styled.div`
display: flex;
flex-direction: row;`

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

    handleChange = (e) => {
        const round = [...this.state.rounds]
        console.log("ROUND CHANGE", round)
        round[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ round })
    }

    render() {
        const rounds = this.state.rounds.map((round, i) => {
            return (
                <div key={i}>
                    <RoundStyled >
                        <div> Round 1 <input onChange={this.handleChange} name="round_one" type="text" value={round.round_one} /></div>
                        <div> Round 2 <input onChange={this.handleChange} name="round_two" type="text" value={round.round_two} /> </div>
                        <div> Round 3 <input onChange={this.handleChange} name="round_three" type="text" value={round.round_three} /></div>
                        <div> Bonus Round <input onChange={this.handleChange} name="bonus_round" type="text" value={round.bonus_round} /></div>
                    </RoundStyled>
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