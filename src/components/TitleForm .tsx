import { IQuestionaryProps } from '../Interfaces';

function TitleForm(props: IQuestionaryProps) {
  const { questionary, changeState, length } = props;
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">
          {questionary.id}. {questionary.question}
        </span>
        <p className="right-align">
          {questionary.id} из {length + 1}
        </p>
      </div>
    </div>
  );
}

export default TitleForm;
