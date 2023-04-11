import React, { useState } from 'react';
import './App.css';
import logo from '/Users/EricaStewart/Library/Mobile Documents/com~apple~CloudDocs/Documents/IT CAREER FOLDER/Javascript/ReactProjects/Quiz Template/quiz-app/src/logo-white.png';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [wrongAnswerIndex, setWrongAnswerIndex] = useState(null);

  const handleAnswerOptionClick = (isCorrect, answerIndex) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(answerIndex);
      if (isCorrect) {
        setCorrectAnswerIndex(answerIndex);
        setScore(score + 1);
      } else {
        setWrongAnswerIndex(answerIndex);
        setCorrectAnswerIndex(
          questions[currentQuestion].answerOptions.findIndex((option) => option.isCorrect)
        );
      }
    }
  };

  const handleNextQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswerIndex(null);
      setCorrectAnswerIndex(null);
      setWrongAnswerIndex(null);
    } else {
      setShowScore(true);
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <>
      <h1>Intermediate Test for Front End Development</h1>
      <div className="body">
        <div className="quiz">
          {showScore ? (
            <div className="quiz-score">
    You scored {score} out of {questions.length} questions.
    <button className='try-again' onClick={() => window.location.reload(false)}>Try Again</button>
  </div>
          ) : (
            <>
              <div className="quiz-question">
                {questions[currentQuestion].questionText}
              </div>
              <div className="quiz-answer-options">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <div
                    key={index}
                    className={`quiz-answer-option 
                      ${selectedAnswerIndex === index ? 'selected' : ''} 
                      ${correctAnswerIndex === index ? 'correct' : ''} 
                      ${wrongAnswerIndex === index ? 'wrong' : ''}`}
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                  >
                    {answerOption.answerText}
                  </div>
                ))}
              </div>
              <button
                className={`quiz-next-question ${
                  selectedAnswerIndex === null ? 'disabled' : ''
                }`}
                onClick={handleNextQuestionClick}
                disabled={selectedAnswerIndex === null}
              >
                Next Question
              </button>
            </>
          )}
        </div>
        <footer>
          <img src={logo} alt="Logo" className="logo" />
          <span>Erica Stewart &copy;{currentYear}</span>
        </footer>
      </div>
    </>
  );
};

export default Quiz;
