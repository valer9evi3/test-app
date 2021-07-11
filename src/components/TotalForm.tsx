import AnswersList from './AnswersList';
import TitleForm from './TitleForm ';
import { IQuestionary, IQuestionaryProps } from '../Interfaces';

function TotalForm(props: IQuestionaryProps) {
  const { questionary, changeState, length, selectedAsnwer } = props;
  return (
    <div className="row">
      <div className="col s12 m6">
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
        <a className="waves-effect waves-light btn-large" onClick={changeState}>
          Ok
        </a>
      </div>
    </div>
  );
}

export default TotalForm;