export interface PlagiarismCandidate {
  url: string;
  plagia_score: number;
  prediction: string;
  plagiarized_text: string;
}

export interface PlagiarismItem {
  text: string;
  candidates: PlagiarismCandidate[];
}

export interface PlagiarismProvider {
  plagia_score: number;
  items: PlagiarismItem[];
  cost: number;
}

export interface PlagiarismDetectionResult {
  originalityai?: PlagiarismProvider;
  winstonai?: PlagiarismProvider;
  [key: string]: PlagiarismProvider | undefined;
} 