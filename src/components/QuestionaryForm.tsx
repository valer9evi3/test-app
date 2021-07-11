import React from 'react';
import AnswersList from './AnswersList';
import TitleForm from './TitleForm ';
import { IQuestionary, IQuestionaryProps } from '../Interfaces';

function QuestionaryForm(props: IQuestionaryProps) {
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
      </div>
    </div>
  );
}

export default QuestionaryForm;
