import React, { useState } from 'react';
import Answer from './Answer';
import { IQestAnswer } from '../Interfaces';
import Button from './Button';

let selectedAnswers: string[] = [];
const arrQestAnswer: IQestAnswer[] = [
  {
    id: 0,
    questions: 'Сколько вам лет?',
    answers: ['16+', '20+', '30+', '40+'],
  },
  {
    id: 1,
    questions: 'Как вас зовут?',
    answers: ['Антон', 'Игорь', 'Владилен', 'Другое'],
  },
  {
    id: 2,
    questions: 'Сколько ты зарабатываешь?',
    answers: ['10000', '20000', '30000', '40000'],
  },
  {
    id: 3,
    questions: 'Ваш любимый хук?',
    answers: ['Справа', 'Слева', 'useState', 'useEffect'],
  },
  {
    id: 4,
    questions: 'Итого',
    answers: [],
  },
];

export const Card: React.FC = () => {
  const [position, setPosition] = useState(0);

  function changePosition(): void {
    if (arrQestAnswer[position].id + 1 < arrQestAnswer.length) {
      setPosition((prev) => prev + 1);
    }
  }

  arrQestAnswer[arrQestAnswer.length - 1].answers = selectedAnswers;

  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              {arrQestAnswer[position].id + 1}.{' '}
              {arrQestAnswer[position].questions}
            </span>
            <p className="right-align">
              {arrQestAnswer[position].id + 1} из {arrQestAnswer.length}
            </p>
          </div>
        </div>
        <Answer
          answers={arrQestAnswer[position].answers}
          changePosition={changePosition}
          selected={selectedAnswers}
        />
        {arrQestAnswer[position].id + 1 === arrQestAnswer.length ? (
          <Button />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
