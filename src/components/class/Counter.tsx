import React from 'react';

type CounterMessage = {
    message: string
}

type CounterState = {
    count: number
}

export class Counter extends React.Component<CounterMessage, CounterState> {
    state = {
        count: 0,
    }
    clickHandler = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}