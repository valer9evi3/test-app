export interface AnswerProps {
  answers: string[];
  changePosition(): void;
  selected: string[];
}

export interface ITest {
  id: number;
  answers: string[];
  questions: string;
}
