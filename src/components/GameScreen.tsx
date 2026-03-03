import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b-2" style={{ backgroundColor: 'white', borderColor: 'var(--color-accent)' }}>
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded transition-colors"
          style={{ color: 'var(--color-muted)' }}
        >
          ← Back
        </button>
        <h1 className="font-bold text-xl" style={{ color: 'var(--color-primary)' }}>Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-sm py-3 px-4" style={{ color: 'var(--color-muted)' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-3 font-bold text-sm" style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-espresso)' }}>
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
