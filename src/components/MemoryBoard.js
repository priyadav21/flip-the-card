import MemoryCard from "./MemoryCard";

export default function MemoryBoard({ cards, selected, matched, onSelect }) {
  return (
    <div
      className="memory-board grid grid-cols-4 gap-3 sm:gap-5"
      role="group"
      aria-label="Memory cards"
    >
      {cards.map((card) => {
        const isMatched = matched.includes(card.id);

        return (
          <MemoryCard
            key={card.id}
            card={card}
            isOpen={selected.includes(card.id) || isMatched}
            isMatched={isMatched}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}
