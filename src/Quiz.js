import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='quiz-score'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='quiz-question'>
            {questions[currentQuestion].questionText}
          </div>
          <div className='quiz-answer-options'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() =>
                  handleAnswerOptionClick(answerOption.isCorrect)}
                className={`quiz-answer-option ${
                  answerOption.isCorrect ? 'correct' : 'incorrect'
                }`}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
