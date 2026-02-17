import { NOTE_NAMES, type NoteName, STANDARD_TUNING } from '../data/notes';

export type NoteLabel = 'note' | 'finger' | 'degree';

export function getNoteIndex(note: NoteName): number {
  return NOTE_NAMES.indexOf(note);
}

export function getNoteAtFret(openString: NoteName, fret: number): NoteName {
  const index = (getNoteIndex(openString) + fret) % 12;
  return NOTE_NAMES[index];
}

export function getScaleNotes(root: NoteName, intervals: number[]): NoteName[] {
  const rootIndex = getNoteIndex(root);
  return intervals.map((interval) => NOTE_NAMES[(rootIndex + interval) % 12]);
}

export function isNoteInScale(
  note: NoteName,
  root: NoteName,
  intervals: number[],
): boolean {
  const scaleNotes = getScaleNotes(root, intervals);
  return scaleNotes.includes(note);
}

export function getFretboardNotes(): NoteName[][] {
  return STANDARD_TUNING.map((openNote) =>
    Array.from({ length: 13 }, (_, fret) => getNoteAtFret(openNote, fret)),
  );
}

const DEGREE_NAMES: Record<number, string> = {
  0: 'R',
  1: 'b2',
  2: '2',
  3: 'b3',
  4: '3',
  5: '4',
  6: 'b5',
  7: '5',
  8: 'b6',
  9: '6',
  10: 'b7',
  11: '7',
};

export function getDegreeName(root: NoteName, note: NoteName): string {
  const interval = (getNoteIndex(note) - getNoteIndex(root) + 12) % 12;
  return DEGREE_NAMES[interval];
}
