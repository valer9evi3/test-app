import { useState } from 'react';
import QuestionaryForm from './components/QuestionaryForm';
import TotalForm from './components/TotalForm';
import HomeScreen from './components/HomeScreen';
import questionaryList from './components/questionaryList';
import { IQuestionary } from './Interfaces';

let selectedAsnwer: IQuestionary = {
  id: questionaryList.length + 1,
  answers: [],
  question: 'Итого',
};

function App() {
  const [state, setState] = useState(0);
  const position: number = state - 1;

  function changeState() {
    if (endQuestions()) {
      setState((prev) => prev + 1);
    }
  }

  function resetState() {
    if (!endQuestions()) {
      setState(0);
      selectedAsnwer = {
        id: questionaryList.length + 1,
        answers: [],
        question: 'Итого',
      };
    }
  }

  function endQuestions() {
    if (state <= questionaryList.length) return true;
    return false;
  }
  return (
    <div className="App">
      {state === 0 ? (
        <HomeScreen
          questionary={questionaryList[position]}
          changeState={changeState}
          length={questionaryList.length}
          selectedAsnwer={selectedAsnwer}
        />
      ) : endQuestions() ? (
        <QuestionaryForm
          questionary={questionaryList[position]}
          changeState={changeState}
          length={questionaryList.length}
          selectedAsnwer={selectedAsnwer}
        />
      ) : (
        <TotalForm
          questionary={selectedAsnwer}
          changeState={resetState}
          length={questionaryList.length}
          selectedAsnwer={selectedAsnwer}
        />
      )}
    </div>
  );
}

export default App;
