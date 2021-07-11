import { IQuestionary, IQuestionaryProps } from '../Interfaces';

function HomeScreen(props: IQuestionaryProps) {
  const { changeState } = props;
  return (
    <div className="row">
      <div className="col s6 m6">
        <div className="card white darken-1">
          <div className="card-content">
            <h4>Ответьте на вопросы анкеты</h4>
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
