import React, { useState } from "react";

export default function Easy() {
  const questions = [
    {
      question: "An algebraic expression containing three terms is called a",
      type: "Easy",
      answerOptions: [
        { answer: "monomial", isCorrect: false },
        { answer: "binomial", isCorrect: false },
        { answer: "trinomial", isCorrect: true },
        { answer: "all of these", isCorrect: false },
      ],
    },
    {
      question:
        "Number of terms in the expression 3.x^2.y - 2.y^2.z - z^2.x + 5 is",
      type: "Easy",
      answerOptions: [
        { answer: "2", isCorrect: false },
        { answer: "3", isCorrect: false },
        { answer: "4", isCorrect: true },
        { answer: "5", isCorrect: false },
      ],
    },
    {
      question: "The terms of expression 4.x^2 - 3.x.y are:",
      type: "Easy",
      answerOptions: [
        { answer: "4.x^2 and -3.x.y", isCorrect: true },
        { answer: "4.x^2 and 3.x.y", isCorrect: false },
        { answer: "4.x^2 and -x.y", isCorrect: false },
        { answer: "x^2 and x.y", isCorrect: false },
      ],
    },
    {
      question: "The subtraction of 5 times of y from x is",
      type: "Easy",
      answerOptions: [
        { answer: "5x - y", isCorrect: false },
        { answer: "y - 5x", isCorrect: false },
        { answer: "x - 5y", isCorrect: true },
        { answer: "5y - x", isCorrect: false },
      ],
    },
    {
      question: "The value of 3.x^2 - 5.x + 3 when x = 1 is",
      type: "Easy",
      answerOptions: [
        { answer: "1", isCorrect: true },
        { answer: "0", isCorrect: false },
        { answer: "-1", isCorrect: false },
        { answer: "11", isCorrect: false },
      ],
    },
    {
      question: "(5/6)^0 =",
      type: "Easy",
      answerOptions: [
        { answer: "1", isCorrect: true },
        { answer: "6/5", isCorrect: false },
        { answer: "0", isCorrect: false },
        { answer: "None of these", isCorrect: false },
      ],
    },
    {
      question: "(-1)^50 × (-1)^51 × (1)^100 × (-1)^101 =",
      type: "Easy",
      answerOptions: [
        { answer: "-1", isCorrect: false },
        { answer: "1", isCorrect: true },
        { answer: "0", isCorrect: false },
        { answer: "2", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="central col-lg-12 col-md-6 col-sm-1">
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
