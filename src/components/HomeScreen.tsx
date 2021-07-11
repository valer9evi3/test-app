import { IQuestionary, IQuestionaryProps } from '../Interfaces';

function HomeScreen(props: IQuestionaryProps) {
  const { changeState } = props;
  return (
    <div className="row">
      <div className="col s1 m4">
        <div className="card white darken-1">
          <div className="card-content">
            <span className="card-title center-align">Анкета</span>
            <p className="center-align">
              Ответьте, пожалуйста, на все вопросы.
            </p>
          </div>
          <div className="card-action">
            <a
              className="waves-effect waves-light btn-large"
              onClick={changeState}
            >
              Начать
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
