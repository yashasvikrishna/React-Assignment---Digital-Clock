import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            time: new Date()
        }
    }

    updateTime(){
        this.setState({
            time: new Date()
        })
    }

    componentWillMount(){
        this.myInterval = setInterval(() => this.updateTime(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    render() {
        return(
            <>
                <div className="Clock">
                    <h1>{this.state.time.toLocaleTimeString()}</h1>
                </div>
            </>
        )
    }
}

export default App;
