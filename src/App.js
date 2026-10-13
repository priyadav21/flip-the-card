import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const emojis = ["🐶", "🐱", "🦁", "🦊", "🐻", "🐼"];
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji: emoji }));

    setCards(shuffled);
  }, []);

  const handleCardClick = (card) => {
    if (isChecking || selected.includes(card.id) || matched.includes(card.id)) {
      return;
    }

    if (selected.length === 0) {
      setSelected([card.id]);
      return;
    }

    const firstId = selected[0];
    const firstCard = cards.find((c) => c.id == firstId);

    setSelected([firstId, card.id]);
    if (firstCard.emoji == card.emoji) {
      setMatched((prev) => [...prev, firstId, card.id]);
      setSelected([]);
    } else {
      setIsChecking(true);
    }

    setTimeout(() => {
      setSelected([]);
      setIsChecking(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(4, 80px)",
        }}
      >
        {cards.map((card) => {
          const isOpen =
            selected.includes(card.id) || matched.includes(card.id);

          return (
            <button
              key={card.id}
              style={{ width: 80, height: 80 }}
              onClick={() => handleCardClick(card)}
            >
              {isOpen ? card.emoji : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
