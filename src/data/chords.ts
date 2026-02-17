export interface ChordVoicing {
  // Fret per string (string 6 to string 1). -1 = mute, 0 = open
  frets: number[];
  // Finger numbers (0 = open/mute, 1-4 = index to pinky)
  fingers: number[];
}

export interface ChordType {
  suffix: string;
  label: string;
}

export const CHORD_TYPES: ChordType[] = [
  { suffix: 'major', label: 'メジャー' },
  { suffix: 'minor', label: 'マイナー' },
  { suffix: '7', label: 'セブンス' },
  { suffix: 'm7', label: 'マイナーセブンス' },
  { suffix: 'maj7', label: 'メジャーセブンス' },
];

// Key: "root-suffix", e.g. "C-major", "A-minor"
export const CHORD_VOICINGS: Record<string, ChordVoicing> = {
  // C
  'C-major': { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
  'C-minor': { frets: [-1, 3, 1, 0, 1, 3], fingers: [0, 3, 1, 0, 2, 4] },
  'C-7': { frets: [-1, 3, 2, 3, 1, 0], fingers: [0, 3, 2, 4, 1, 0] },
  'C-m7': { frets: [-1, 3, 1, 3, 1, 3], fingers: [0, 2, 1, 3, 1, 4] },
  'C-maj7': { frets: [-1, 3, 2, 0, 0, 0], fingers: [0, 3, 2, 0, 0, 0] },

  // D
  'D-major': { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
  'D-minor': { frets: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
  'D-7': { frets: [-1, -1, 0, 2, 1, 2], fingers: [0, 0, 0, 2, 1, 3] },
  'D-m7': { frets: [-1, -1, 0, 2, 1, 1], fingers: [0, 0, 0, 2, 1, 1] },
  'D-maj7': { frets: [-1, -1, 0, 2, 2, 2], fingers: [0, 0, 0, 1, 2, 3] },

  // E
  'E-major': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
  'E-minor': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
  'E-7': { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] },
  'E-m7': { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0] },
  'E-maj7': { frets: [0, 2, 1, 1, 0, 0], fingers: [0, 3, 1, 2, 0, 0] },

  // F
  'F-major': { frets: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 4, 3, 1] },
  'F-minor': { frets: [1, 1, 1, 3, 3, 1], fingers: [1, 1, 1, 4, 3, 1] },
  'F-7': { frets: [1, 1, 2, 1, 3, 1], fingers: [1, 1, 2, 1, 3, 1] },
  'F-m7': { frets: [1, 1, 1, 1, 3, 1], fingers: [1, 1, 1, 1, 3, 1] },
  'F-maj7': { frets: [1, 1, 2, 2, 3, 1], fingers: [1, 1, 2, 3, 4, 1] },

  // G
  'G-major': { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3] },
  'G-minor': { frets: [3, 3, 3, 5, 5, 3], fingers: [1, 1, 1, 3, 4, 1] },
  'G-7': { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1] },
  'G-m7': { frets: [3, 3, 3, 3, 5, 3], fingers: [1, 1, 1, 1, 3, 1] },
  'G-maj7': { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 1, 0, 0, 0, 2] },

  // A
  'A-major': { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0] },
  'A-minor': { frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
  'A-7': { frets: [-1, 0, 2, 0, 2, 0], fingers: [0, 0, 2, 0, 3, 0] },
  'A-m7': { frets: [-1, 0, 2, 0, 1, 0], fingers: [0, 0, 2, 0, 1, 0] },
  'A-maj7': { frets: [-1, 0, 2, 1, 2, 0], fingers: [0, 0, 2, 1, 3, 0] },

  // B
  'B-major': { frets: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 2, 3, 4, 1] },
  'B-minor': { frets: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1] },
  'B-7': { frets: [-1, 2, 1, 2, 0, 2], fingers: [0, 2, 1, 3, 0, 4] },
  'B-m7': { frets: [-1, 2, 0, 2, 0, 2], fingers: [0, 1, 0, 2, 0, 3] },
  'B-maj7': { frets: [-1, 2, 4, 3, 4, 2], fingers: [0, 1, 3, 2, 4, 1] },

  // Sharps - common voicings
  'C#-major': { frets: [-1, 4, 3, 1, 2, 1], fingers: [0, 4, 3, 1, 2, 1] },
  'C#-minor': { frets: [-1, 4, 2, 1, 2, 0], fingers: [0, 4, 2, 1, 3, 0] },
  'D#-major': { frets: [-1, -1, 1, 3, 4, 3], fingers: [0, 0, 1, 2, 4, 3] },
  'D#-minor': { frets: [-1, -1, 1, 3, 4, 2], fingers: [0, 0, 1, 3, 4, 2] },
  'F#-major': { frets: [2, 2, 3, 4, 4, 2], fingers: [1, 1, 2, 4, 3, 1] },
  'F#-minor': { frets: [2, 2, 2, 4, 4, 2], fingers: [1, 1, 1, 4, 3, 1] },
  'G#-major': { frets: [4, 4, 5, 6, 6, 4], fingers: [1, 1, 2, 4, 3, 1] },
  'G#-minor': { frets: [4, 4, 4, 6, 6, 4], fingers: [1, 1, 1, 4, 3, 1] },
  'A#-major': { frets: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1] },
  'A#-minor': { frets: [-1, 1, 3, 3, 2, 1], fingers: [0, 1, 3, 4, 2, 1] },
};
