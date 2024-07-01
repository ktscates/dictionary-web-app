export interface NavbarProps {
  changeTheme: () => void;
  changeFont: (font: string) => void;
}

export interface SearchFieldProps {
  onSearch: (query: string) => void;
}

export interface Phonetics {
  text: string;
  audio: string;
}

export interface Meanings {
  word: string;
  partOfSpeech: string;
  definitions: { definition: string; example?: string }[];
  synonyms: string[];
}

export interface WordData {
  word: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  sourceUrls: string[];
}

export interface ResultFieldProps {
  data: WordData | null;
  error: boolean;
}
