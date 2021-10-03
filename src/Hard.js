import React, { useState } from "react";

export default function Hard() {
  const questions = [
    {
      question: "The expression for the number of diagonals that we can make from one vertex of a n sided polygon is:",
      type: "Hard",
      answerOptions: [
        { answer: '2n + 1', isCorrect: false },
        { answer: 'n - 2', isCorrect: false },
        { answer: '5n + 2', isCorrect: false },
        { answer: 'n - 3', isCorrect: true },
      ]
    },
    {
      question: "123.x^2.y - 138.x^2.y is a like term of",
      type: "Hard",
      answerOptions: [
        { answer: '10.x.y', isCorrect: false },
        { answer: '-15.x.y', isCorrect: false },
        { answer: '-15.x.y^2', isCorrect: false },
        { answer: '10.x^2.y', isCorrect: true },
      ]
    },
    {
      question: "(2^20 ÷ 2^15) × 2^3 =",
      type: "Hard",
      answerOptions: [
        { answer: '2^15', isCorrect: true },
        { answer: '2^8', isCorrect: false },
        { answer: '2^5', isCorrect: false },
        { answer: 'None of these', isCorrect: false },
      ]
    },
    {
      question: "(8^2 × 8^4) - 2^18 =",
      type: "Hard",
      answerOptions: [
        { answer: '2^2', isCorrect: false },
        { answer: '2^4', isCorrect: false },
        { answer: '0', isCorrect: true },
        { answer: 'None of these', isCorrect: false },
      ]
    },
    {
      question: "(3^7) ÷ (81 × 3^3) =",
      type: "Hard",
      answerOptions: [
        { answer: '3', isCorrect: false },
        { answer: '3^2', isCorrect: false },
        { answer: '3^0', isCorrect: true },
        { answer: 'None of these', isCorrect: false },
      ]
    },
    {
      question: "(10 × 5^(n+1)+ 25 × 5^n) ÷ (3 × 5^(n+2)+ 10 × 5^(n+1))",
      type: "Hard",
      answerOptions: [
        { answer: '3/5', isCorrect: true },
        { answer: '1', isCorrect: false },
        { answer: '0', isCorrect: false },
        { answer: '5', isCorrect: false },
      ]
    },
    {
      question: "Find the mode for the data set, which shows the heights( in inches ) of 10 students in a class: 60, 65, 63, 62, 65, 70, 62, 68, 60, 65",
      type: "Hard",
      answerOptions: [
        { answer: '62', isCorrect: false },
        { answer: '65', isCorrect: true },
        { answer: '70', isCorrect: false },
        { answer: '60', isCorrect: false },
      ]
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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}



