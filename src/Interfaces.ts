export interface IQuestionary {
  id: number;
  answers: string[];
  question: string;
}

export interface IQuestionaryProps {
  questionary: IQuestionary;
  changeState: () => void;
  length: number;
  selectedAsnwer: IQuestionary;
}
