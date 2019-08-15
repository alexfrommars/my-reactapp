import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    //in JS classes you need to call super when defining the constructor of a subclass
    //All react component classes that have a constructor should start with a super(props) call
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" 
      onClick={() => this.setState({value: 'X'})}
      //render method will display the current state's value when clicked
        >

        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  //store the games' state in the parent board component instead of in each square
  //board component can tell each square what to display by passing a prop
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),

    };
  }
  renderSquare(i) {
    return <Square value ={this.state.squares[i]} />;
    //passing prop to value called square
    //instruct each square about it's current value and read from it
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

