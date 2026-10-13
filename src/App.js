import "./styles.css";
import GameFooter from "./components/GameFooter";
import GameHeader from "./components/GameHeader";
import GameIntro from "./components/GameIntro";
import MemoryBoard from "./components/MemoryBoard";
import useMemoryGame from "./hooks/useMemoryGame";

export default function App() {
  const { cards, selected, matched, isChecking, restart, selectCard } =
    useMemoryGame();
  const matchedPairs = matched.length / 2;
  const isComplete = matchedPairs === 8;

  return (
    <main className="game-backdrop min-h-screen px-4 py-8 font-body text-mist sm:px-6 sm:py-12">
      <span className="ambient-star ambient-star-one" aria-hidden="true" />
      <span className="ambient-star ambient-star-two" aria-hidden="true" />
      <span className="ambient-star ambient-star-three" aria-hidden="true" />
      <div className="game-shell relative mx-auto w-full max-w-3xl">
        <section aria-labelledby="game-title">
          <GameIntro matchedPairs={matchedPairs} isChecking={isChecking} />
          <GameHeader matchedPairs={matchedPairs} onRestart={restart} />
          <MemoryBoard
            cards={cards}
            selected={selected}
            matched={matched}
            onSelect={selectCard}
          />
        </section>

        <GameFooter isComplete={isComplete} />
      </div>
    </main>
  );
}
