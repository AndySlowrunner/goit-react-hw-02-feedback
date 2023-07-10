import { Component } from 'react';

export class Fidbackcounter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    handleClickGood = () =>
        this.setState((preState) => ({ good: preState.good + 1 }))
    
    render() {
        return (
            <div>
                <div>
                    <h1>Please leave feedback</h1>
                </div>
                <div>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                </div>
                <div>
                    <h1>Statistics</h1>
                </div>
                <ul>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                </ul>
            </div>
        )
    }

}