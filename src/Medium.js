import React, { useState } from "react";

export default function Medium() {
  const questions = [
    {
      question: "Q.Factors of -5.x^2.y^2.z are:",
      type: "Medium",
      answerOptions: [
        { answer: "-5.x.y.z", isCorrect: false },
        { answer: "-5.x^2.y.z", isCorrect: false },
        { answer: "-5.x.x.y.y.z", isCorrect: true },
        { answer: "-5.x.y.z^2", isCorrect: false },
      ],
    },
    {
      question: "Q.Coefficient of x in -9.x.y^2.z is:",
      type: "Medium",
      answerOptions: [
        { answer: "9.y.z", isCorrect: false },
        { answer: "-9.y.z", isCorrect: false },
        { answer: "9.y^2.z", isCorrect: false },
        { answer: "-9.y^2.z", isCorrect: true },
      ],
    },
    {
      question:
        "Q.The side length of the top of a square table is x. The expression for perimeter is:",
      type: "Medium",
      answerOptions: [
        { answer: "4 + x", isCorrect: false },
        { answer: "2x", isCorrect: false },
        { answer: "4x", isCorrect: true },
        { answer: "8x", isCorrect: false },
      ],
    },
    {
      question: "Q.(2^2)^n = (2^3)^4, then n = :",
      type: "Medium",
      answerOptions: [
        { answer: "4", isCorrect: false },
        { answer: "3", isCorrect: false },
        { answer: "12", isCorrect: false },
        { answer: "6", isCorrect: true },
      ],
    },
    {
      question: "Q.(-7/5)^-1 = :",
      type: "Medium",
      answerOptions: [
        { answer: "5/7", isCorrect: false },
        { answer: "-5/7", isCorrect: true },
        { answer: "7/5", isCorrect: false },
        { answer: "None of these", isCorrect: false },
      ],
    },
    {
      question: "Q.81^5 ÷ (3^2)^5 = :",
      type: "Medium",
      answerOptions: [
        { answer: "3^10", isCorrect: true },
        { answer: "3^2", isCorrect: false },
        { answer: "3^5", isCorrect: false },
        { answer: "None of these", isCorrect: false },
      ],
    },
    {
      question: "Q.(1/4)^-3 - (1/3)^-3 = :",
      type: "Medium",
      answerOptions: [
        { answer: "37", isCorrect: true },
        { answer: "1/37", isCorrect: false },
        { answer: "-37", isCorrect: false },
        { answer: "-1/37", isCorrect: false },
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
    <>
    <h3 style={{color:"white",fontWeight:"bold",backgroundColor:"blue"}}>Select the answer navigate to next question</h3>
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="central col-lg-12 col-md-6 col-sm-1">
            <div className="question-section">
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answer}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
}
