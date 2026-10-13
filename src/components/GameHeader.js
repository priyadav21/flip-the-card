export default function GameHeader({ matchedPairs, onRestart }) {
  return (
    <header className="score-panel">
      <div className="score-summary">
        <span className="stacked-cards" aria-hidden="true">
          <span />
          <span />
        </span>
        <div className="score-copy">
          <span className="score-label">Pairs Matched</span>
          <span className="score-value">{matchedPairs} / 8</span>
        </div>
      </div>
      <span className="score-divider" aria-hidden="true" />
      <button type="button" onClick={onRestart} className="restart-button">
        <span className="restart-icon" aria-hidden="true">
          ⟳
        </span>
        Restart
      </button>
    </header>
  );
}
