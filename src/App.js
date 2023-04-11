import React from 'react';
import Quiz from './Quiz';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'London', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest country in the world?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'Russia', isCorrect: true },
      { answerText: 'USA', isCorrect: false },
      { answerText: 'Canada', isCorrect: false },
    ],
  },
  // Add more questions here
];

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
