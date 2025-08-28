import React, { useState } from 'react';
import Navbar from './Navbar';
import './JavaScriptQuiz.css'; // Reuse the same CSS for consistency

const questions = [
  {
    question: "What is the purpose of TypeScript?",
    options: [
      "To replace JavaScript entirely",
      "To add static types to JavaScript",
      "To optimize JavaScript performance",
      "To simplify DOM manipulation"
    ],
    correctAnswer: "To add static types to JavaScript",
    explanation: "TypeScript is a superset of JavaScript that adds static typing to catch errors at compile time, enhancing code reliability."
  },
  {
    question: "How do you define a variable with a specific type in TypeScript?",
    options: [
      "let x: number = 5;",
      "var x = number(5);",
      "let x = 5 as number;",
      "type x = 5;"
    ],
    correctAnswer: "let x: number = 5;",
    explanation: "TypeScript uses a colon (`:`) to specify types, e.g., `let x: number = 5;` assigns `x` as a number."
  },
  {
    question: "What is an interface in TypeScript used for?",
    options: [
      "To define a class",
      "To define the shape of an object",
      "To create a new type alias",
      "To handle asynchronous operations"
    ],
    correctAnswer: "To define the shape of an object",
    explanation: "Interfaces describe the structure of objects, specifying properties and their types, e.g., `interface User { name: string; age: number; }`."
  },
  {
    question: "What does the `any` type represent in TypeScript?",
    options: [
      "A type that enforces strict typing",
      "A type that allows any value",
      "A type for arrays only",
      "A type for undefined values"
    ],
    correctAnswer: "A type that allows any value",
    explanation: "The `any` type allows a variable to hold any value, bypassing TypeScript's type checking, but should be used sparingly."
  },
  {
    question: "How do you define a function with a return type in TypeScript?",
    options: [
      "function add(a: number, b: number): number { return a + b; }",
      "function add(a, b) => number { return a + b; }",
      "function add(a: number, b: number) { return a + b as number; }",
      "add(a: number, b: number): number => { return a + b; }"
    ],
    correctAnswer: "function add(a: number, b: number): number { return a + b; }",
    explanation: "Return types are specified after the parameter list with a colon, e.g., `: number` in `function add(a: number, b: number): number`."
  },
  {
    question: "What is a union type in TypeScript?",
    options: [
      "A type that combines multiple types into one",
      "A type that restricts values to a single type",
      "A type for combining objects",
      "A type for asynchronous operations"
    ],
    correctAnswer: "A type that combines multiple types into one",
    explanation: "Union types allow a variable to hold multiple types, e.g., `let value: string | number;` can be a string or number."
  },
  {
    question: "How do you make a property optional in a TypeScript interface?",
    options: [
      "Add a `?` after the property name",
      "Use the `optional` keyword",
      "Wrap the property in square brackets",
      "Use the `any` type"
    ],
    correctAnswer: "Add a `?` after the property name",
    explanation: "Optional properties are marked with `?`, e.g., `interface User { name?: string; }` makes `name` optional."
  },
  {
    question: "What does the `never` type represent in TypeScript?",
    options: [
      "A value that is always undefined",
      "A value that never occurs",
      "A type for nullable values",
      "A type for empty arrays"
    ],
    correctAnswer: "A value that never occurs",
    explanation: "The `never` type represents values that never occur, like functions that always throw or never return."
  },
  {
    question: "How do you extend an interface in TypeScript?",
    options: [
      "interface Child extends Parent { ... }",
      "interface Child : Parent { ... }",
      "interface Child implements Parent { ... }",
      "extend interface Child from Parent { ... }"
    ],
    correctAnswer: "interface Child extends Parent { ... }",
    explanation: "Interfaces are extended using the `extends` keyword, e.g., `interface Child extends Parent { newProp: string; }`."
  },
  {
    question: "What is the output of TypeScript compilation?",
    options: [
      "Machine code",
      "JavaScript code",
      "Bytecode",
      "TypeScript bytecode"
    ],
    correctAnswer: "JavaScript code",
    explanation: "TypeScript compiles to plain JavaScript, removing type annotations, to run in any JavaScript environment."
  }
];

const TypeScriptQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1); // End of quiz
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  return (
    <>
      <Navbar buyLink="https://your-store.com/typescript-basics" />
      <div className="quiz-container">
        <h1 className="quiz-title">🎮 TypeScript Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of TypeScript fundamentals with this interactive quiz! Answer questions on types, interfaces, unions, and more. Get instant feedback and learn as you go!
        </p>

        {currentQuestion === -1 ? (
          <div className="quiz-result">
            <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
            <p className="quiz-description">
              Your score: <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <p className="quiz-description">
              {score === questions.length
                ? "Perfect score! You're a TypeScript pro!"
                : score >= questions.length / 2
                ? "Great job! You're getting the hang of TypeScript basics."
                : "Keep practicing! Try again to improve your score."}
            </p>
            <button className="quiz-button" onClick={handleRestart}>
              Restart Quiz
            </button>
            <a
              href="https://your-store.com/typescript-basics"
              className="quiz-buy-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More with TypeScript Basics
            </a>
          </div>
        ) : (
          <div className="quiz-question">
            <h2 className="quiz-title text-2xl">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="quiz-description font-medium">{questions[currentQuestion].question}</p>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option-button ${
                    showFeedback && selectedOption === option
                      ? isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
            {showFeedback && (
              <div className="quiz-feedback">
                <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </p>
                <p className="quiz-description">{questions[currentQuestion].explanation}</p>
                <button className="quiz-button" onClick={handleNext}>
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              </div>
            )}
            <p className="quiz-score">Score: {score}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TypeScriptQuiz;