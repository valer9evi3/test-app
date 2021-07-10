export interface AnswerProps {
  answers: string[];
  changePosition(): void;
  selected: string[];
}

export interface IQestAnswer {
  id: number;
  answers: string[];
  questions: string;
}
