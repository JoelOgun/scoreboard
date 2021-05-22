const players = [
  {
    name: "Joel",
    score: 50,
    id: 1,
  },
  {
    name: "Chico",
    score: 90,
    id: 2,
  },
  {
    name: "John",
    score: 30,
    id: 3,
  },
  {
    name: "Hector",
    score: 10,
    id: 4,
  },
];

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
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="My Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />

      {/* Players list */}
      {props.initialPlayers.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
