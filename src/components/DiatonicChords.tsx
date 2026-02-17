import type { NoteName } from '../data/notes';
import { getDiatonicChords } from '../utils/music';

interface Props {
  root: NoteName;
  intervals: number[];
  onSelectChord: (root: NoteName, suffix: string) => void;
}

export default function DiatonicChords({ root, intervals, onSelectChord }: Props) {
  const chords = getDiatonicChords(root, intervals);
  if (chords.length === 0) return null;

  // ディグリー表記をコード品質に合わせて生成
  const degreeLabels = chords.map((chord) => {
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][chord.degree - 1];
    if (chord.suffix === 'minor') return roman.toLowerCase();
    if (chord.suffix === 'dim') return roman.toLowerCase() + '°';
    if (chord.suffix === 'aug') return roman + '+';
    return roman;
  });

  return (
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      {chords.map((chord, i) => (
        <button
          key={chord.degree}
          onClick={() => onSelectChord(chord.root, chord.suffix)}
          className="flex flex-col items-center px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 hover:bg-indigo-50 hover:border-indigo-300 transition-colors cursor-pointer min-w-[3.5rem]"
        >
          <span className="text-[10px] text-slate-400 font-medium leading-tight">
            {degreeLabels[i]}
          </span>
          <span className="text-sm font-bold text-slate-700 leading-tight mt-0.5">
            {chord.label}
          </span>
        </button>
      ))}
    </div>
  );
}
