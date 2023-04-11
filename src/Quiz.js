import React, { useState } from 'react';
import './App.css';

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

  return (
    <>
    <h1>Intermediate Test for Front End Development</h1>
    <div className='body'>
      <div className="quiz">
        {showScore ? (
          <div className="quiz-score">
            You scored {score} out of {questions.length} questions.
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
                  className={`quiz-answer-option ${selectedAnswerIndex === index ? 'selected' : ''} ${correctAnswerIndex === index ? 'correct' : ''} ${wrongAnswerIndex === index ? 'wrong' : ''}`}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                >
                  {answerOption.answerText}
                </div>
              ))}
            </div>
            <button
              className={`quiz-next-question ${selectedAnswerIndex === null ? 'disabled' : ''}`}
              onClick={handleNextQuestionClick}
              disabled={selectedAnswerIndex === null}
            >
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Quiz;
