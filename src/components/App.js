import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date(),
        };
        this.intervalId = null;
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1*1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="Clock">
                <h3 id="time">{this.getTimeString()}</h3>
            </div>
        );
    }

    getTimeString() {
        const currTime = this.state.time;
        const [hours, minutes, seconds] = [
            currTime.getHours(),
            currTime.getMinutes(),
            currTime.getSeconds(),
        ];

        const amOrpm = hours >= 12 ? "PM" : "AM";
        const twelveHourFormat = hours > 12 ? hours - 12 : hours;
        const hourString = this.padNumberToTwoDigits(twelveHourFormat);
        const minuteString = this.padNumberToTwoDigits(minutes);
        const secondString = this.padNumberToTwoDigits(seconds);

        const timeString =  `${hourString}:${minuteString}:${secondString} ${amOrpm}`;
        return timeString;
    }

    padNumberToTwoDigits(num) {
        return `${num < 10 ? "0": ""}${num}`
    }
}

export default App;
