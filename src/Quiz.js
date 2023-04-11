import React, { useState } from 'react';
import './App.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const handleAnswerOptionClick = (isCorrect, answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    if (isCorrect) {
      setCorrectAnswerIndex(answerIndex);
      setScore(score + 1);
    }
  };

  const handleNextQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswerIndex(null);
      setCorrectAnswerIndex(null);
    } else {
      setShowScore(true);
    }
  };

  return (
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
                className={`quiz-answer-option ${selectedAnswerIndex === index ? 'selected' : ''} ${correctAnswerIndex === index ? 'correct' : ''} ${selectedAnswerIndex === index && correctAnswerIndex !== index ? 'incorrect' : ''}`}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
              >
                {answerOption.answerText}
              </div>
            ))}
          </div>
          {selectedAnswerIndex !== null && (
            <button className="quiz-next-question" onClick={handleNextQuestionClick}>
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
