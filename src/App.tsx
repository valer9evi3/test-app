import React from 'react';
import { Card } from './components/Card';

function App() {
  return (
    <div className="container">
      <h3 className="head1">Ответьте на вопросы:</h3>
      <div className="row">
        <div className="col s12 m6">
          <div className="card-panel">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
