import React, { Component } from 'react';
import Calendar from 'react-calendar'
import styled from 'styled-components'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const CalendarStyle = styled.div`
margin-left: 20px;`

class CalendarTest extends Component {
    state = {
        date: {}
    }

    componentDidMount() {
        this.getDate()
    }

    getDate = () => {
        const date = moment().set('month', 'date');
        console.log(date)
        this.setState({
            date: date
        })

    }

    render() {
        return (
            <div>
                <CalendarStyle >
                    <Calendar />
                </CalendarStyle>
            </div>
        );
    }
}

export default CalendarTest