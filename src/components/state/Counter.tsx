import { useContext, useReducer } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type CounterState = {
  count: number;
};

// This feature is called as the discriminated unions in ts and is the recommended approach for useReducer hook in ts
type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
        return initialState
    default:
      return state;
  }
};

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = useContext(ThemeContext)
  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text}}>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  );
}
