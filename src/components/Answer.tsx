import React from 'react';
import { AnswerProps } from '../Interfaces';

function Answer(props: AnswerProps) {
  const answers = props.answers;
  function onChange(answer: string) {
    props.changePosition();
    props.selected.push(answer);
  }

  const answersList = answers.map((answer) => {
    return (
      <a className="collection-item" onClick={() => onChange(answer)}>
        {answer}
      </a>
    );
  });
  return <div className="collection">{answersList} </div>;
}

export default Answer;
