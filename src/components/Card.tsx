import React, { useState } from 'react';
import Answer from './Answer';
import { ITest } from '../Interfaces';
import Button from './Button';
import { render } from '@testing-library/react';

let selectedAnswers: string[] = [];
const testInt: ITest[] = [
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
    if (testInt[position].id + 1 < testInt.length) {
      setPosition((prev) => prev + 1);
    }
  }

  testInt[testInt.length - 1].answers = selectedAnswers;

  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              {testInt[position].id + 1}. {testInt[position].questions}
            </span>
            <p className="right-align">
              {testInt[position].id + 1} из {testInt.length}
            </p>
          </div>
        </div>
        <Answer
          answers={testInt[position].answers}
          changePosition={changePosition}
          selected={selectedAnswers}
        />
        {testInt[position].id + 1 === testInt.length ? <Button /> : <></>}
      </div>
    </div>
  );
};
