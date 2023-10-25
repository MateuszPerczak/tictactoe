import StyledGame from "./Game.styles";

const Game = (): JSX.Element => {
  return (
    <StyledGame
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.2 }}
    ></StyledGame>
  );
};

export default Game;
