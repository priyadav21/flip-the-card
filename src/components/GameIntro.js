import GameIcon from "../assets/game-icon.png";

export default function GameIntro({ matchedPairs, isChecking }) {
  const status = isChecking
    ? "Those cards did not match. Try another pair."
    : matchedPairs === 8
      ? "Every pair found. Amazing work!"
      : `${matchedPairs} of 8 pairs matched.`;

  return (
    <div className="game-intro">
      <h1 id="game-title" className="game-title font-display">
        <span className="brain-mark" aria-hidden="true">
          <img src={GameIcon} alt="Game Icon" />
        </span>
        <span>
          Memory <span className="title-accent">Match</span>
        </span>
      </h1>
      <p className="game-subtitle">Flip, find, and match the pairs!</p>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
