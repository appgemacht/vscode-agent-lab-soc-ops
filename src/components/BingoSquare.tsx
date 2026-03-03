import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border-2 rounded-lg transition-all duration-150 select-none min-h-[60px] text-xs leading-tight font-medium';

  const stateClasses = square.isMarked
    ? 'text-white' 
    : 'bg-white text-gray-700 active:opacity-90';

  const stateStyle = square.isMarked
    ? isWinning
      ? { backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-accent-light)' }
      : { backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-primary)' }
    : { borderColor: 'var(--color-muted)' };

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={stateStyle}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-white text-sm font-bold">✓</span>
      )}
    </button>
  );
}
