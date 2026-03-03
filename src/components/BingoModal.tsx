interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out]" style={{ backgroundColor: 'white' }}>
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>BINGO!</h2>
        <p className="text-lg mb-8" style={{ color: 'var(--color-muted)' }}>You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
