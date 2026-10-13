import { useEffect, useRef, useState } from "react";

const shuffleCards = () => {
  const emojis = ["☀️", "🧿", "🥑", "🌸", "🌷", "🐬", "🍏", "🧀"];
  return [...emojis, ...emojis]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, emoji }));
};

export default function useMemoryGame() {
  const [cards, setCards] = useState(shuffleCards);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const mismatchTimeout = useRef(null);

  useEffect(() => () => clearTimeout(mismatchTimeout.current), []);

  const restart = () => {
    clearTimeout(mismatchTimeout.current);
    mismatchTimeout.current = null;
    setCards(shuffleCards());
    setSelected([]);
    setMatched([]);
    setIsChecking(false);
  };

  const selectCard = (card) => {
    if (isChecking || selected.includes(card.id) || matched.includes(card.id)) {
      return;
    }

    if (selected.length === 0) {
      setSelected([card.id]);
      return;
    }

    const firstId = selected[0];
    const firstCard = cards.find(({ id }) => id === firstId);
    setSelected([firstId, card.id]);

    if (firstCard.emoji === card.emoji) {
      setMatched((previous) => [...previous, firstId, card.id]);
      setSelected([]);
      return;
    }

    setIsChecking(true);
    mismatchTimeout.current = setTimeout(() => {
      setSelected([]);
      setIsChecking(false);
      mismatchTimeout.current = null;
    }, 1000);
  };

  return {
    cards,
    selected,
    matched,
    isChecking,
    restart,
    selectCard,
  };
}
