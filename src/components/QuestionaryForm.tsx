import AnswersList from './AnswersList';
import TitleForm from './TitleForm ';
import { IQuestionaryProps } from '../Interfaces';

function QuestionaryForm(props: IQuestionaryProps) {
  const { questionary, changeState, length, selectedAsnwer } = props;
  return (
    <div className="row">
      <div className="col s1 m4">
        <TitleForm
          questionary={questionary}
          changeState={changeState}
          length={length}
          selectedAsnwer={selectedAsnwer}
        />
        <AnswersList
          questionary={questionary}
          changeState={changeState}
          length={length}
          selectedAsnwer={selectedAsnwer}
        />
      </div>
    </div>
  );
}

export default QuestionaryForm;
