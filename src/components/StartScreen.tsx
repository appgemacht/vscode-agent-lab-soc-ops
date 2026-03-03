interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>Soc Ops</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--color-muted)' }}>Social Bingo</p>
        
        <div className="rounded-xl p-8 shadow-lg border-2 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-accent)' }}>
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-primary)' }}>How to play</h2>
          <ul className="text-left text-sm space-y-2" style={{ color: 'var(--color-muted)' }}>
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
