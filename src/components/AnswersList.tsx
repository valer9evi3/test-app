import { IQuestionary, IQuestionaryProps } from '../Interfaces';

function AnswersList(props: IQuestionaryProps) {
  const { questionary, changeState, selectedAsnwer } = props;

  function selectedAnswer(answer: string) {
    selectedAsnwer.answers.push(answer);
    changeState();
  }

  const answersList = questionary.answers.map((answer) => {
    return (
      <a
        className="collection-item"
        id={Date.now().toString()}
        onClick={() => selectedAnswer(answer)}
      >
        {answer}
      </a>
    );
  });

  return (
    <>
      <div className="collection"> {answersList} </div>
    </>
  );
}

export default AnswersList;
