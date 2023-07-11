import { Component } from 'react';

export class Fidbackcounter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    handleClickGood = () =>
        this.setState((preState) => ({ good: preState.good + 1 }))
    
    handleClickNeutral = () =>
        this.setState((preState) => ({ neutral: preState.neutral + 1 }))
    
    handleClickBad = () =>
        this.setState((preState) => ({ bad: preState.bad + 1 }))
    
    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((previousValue, number) => {
            return previousValue + number;
        }, 0);
        return total
    }
    
    countPositiveFeedbackPercentage = () => {
        let percentage = 0
        let sum = this.countTotalFeedback()
        percentage = Math.round(this.state.good / sum * 100)
        return percentage
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Please leave feedback</h1>
                </div>
                <div>
                    <button onClick={this.handleClickGood}>Good</button>
                    <button onClick={this.handleClickNeutral}>Neutral</button>
                    <button onClick={this.handleClickBad}>Bad</button>
                </div>
                <div>
                    <h1>Statistics</h1>
                </div>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: {this.countTotalFeedback()}</li>
                    <li>Positiv feedback: {this.countPositiveFeedbackPercentage()}%</li>
                </ul>
            </div>
        )
    }

}