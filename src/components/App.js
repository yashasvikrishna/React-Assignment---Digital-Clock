import React, {Component, useState} from "react";
import '../styles/App.css';

// class App extends Component {
//     constructor(){
//         let time = new Date().toLocaleTimeString();
//         this.state = {
//             ctime: time
//         }
//     }

//     const updateTime

//     render() {

//         // let time = new Date().toLocaleTimeString();
//         return(
//             <>
//                 <h1>{ctime}</h1>
//             </>
//         )
//     }
// }

const App = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(updateTime, 1000);

    return(
        <>
            <h1 className="Clock">{ctime}</h1>
        </>
    )
}


export default App;
