const themeByEmoji = {
  "☀️": "yellow",
  "🧿": "blue",
  "🥑": "green",
  "🌸": "pink",
  "🌷": "pink",
  "🐬": "blue",
  "🍏": "green",
  "🧀": "yellow",
};

export default function MemoryCard({ card, isOpen, isMatched, onSelect }) {
  const theme = themeByEmoji[card.emoji];

  return (
    <button
      type="button"
      className={`memory-card aspect-square w-full ${`tone-${theme}`} ${isOpen ? "is-open" : ""} ${isMatched ? "is-matched" : ""}`}
      onClick={() => onSelect(card)}
      aria-label={
        isOpen
          ? `Card ${card.id + 1}: ${card.emoji}`
          : `Reveal card ${card.id + 1}`
      }
      aria-pressed={isOpen}
    >
      <span className="memory-card-inner">
        <span className="memory-card-face memory-card-front">
          <span className="card-star" aria-hidden="true">
            ✦
          </span>
        </span>
        <span className="memory-card-face memory-card-back" aria-hidden="true">
          {card.emoji}
        </span>
      </span>
    </button>
  );
}
