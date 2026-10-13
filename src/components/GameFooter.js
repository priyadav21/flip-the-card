export default function GameFooter({ isComplete }) {
  return (
    <footer className="game-footer">
      <span className="footer-rays" aria-hidden="true">
        ⌁
      </span>
      <span>
        {isComplete
          ? "Amazing! You found every pair!"
          : "Good luck! You got this!"}
      </span>
      <span className="footer-rays footer-rays-right" aria-hidden="true">
        ⌁
      </span>
    </footer>
  );
}
