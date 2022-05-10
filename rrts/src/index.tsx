import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

// interface AppState {
//   counter: number;
// }

class App extends React.Component<AppProps> {
  //  AppState
  state = { counter: 0 };
  // constructor(props: AppProps) { // 二擇一
  //   super(props);

  //   this.state = { counter: 0 };
  // }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter++ });
  };
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter-- });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
