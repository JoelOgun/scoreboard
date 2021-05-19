const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">{props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter score={props.score} />
    </div>
  );
};
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" totalPlayers={1} />

      {/* Players list */}
      <Player name="Joel" score={50} />
      <Player name="Chico" score={90} />
      <Player name="John" score={30} />
      <Player name="Hector" score={10} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
