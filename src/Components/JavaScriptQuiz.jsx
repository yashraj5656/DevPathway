import React, { useState } from 'react';
import './JavaScriptQuiz.css';

const questions = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const",
    explanation: "The `const` keyword declares a variable that cannot be reassigned after its initial value is set. However, for objects and arrays, their properties or elements can still be modified."
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    correctAnswer: "object",
    explanation: "In JavaScript, `typeof null` returns `'object'` due to a historical bug in the language. This is a quirk you should be aware of when checking types."
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
    explanation: "The `push()` method adds one or more elements to the end of an array and returns the new length of the array."
  },
  {
    question: "What does the following function return: `function add(a, b) { return a + b; }` when called with `add(2, 3)`?",
    options: ["23", "5", "undefined", "NaN"],
    correctAnswer: "5",
    explanation: "The function `add` takes two parameters and returns their sum. Calling `add(2, 3)` performs `2 + 3` and returns `5`."
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["Number", "Boolean", "Float", "String"],
    correctAnswer: "Float",
    explanation: "JavaScript has data types like `Number`, `Boolean`, and `String`, but `Float` is not a distinct type. Floating-point numbers are included within the `Number` type."
  },
  {
    question: "What is the output of this code: `for (let i = 0; i < 3; i++) { console.log(i); }`?",
    options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "undefined"],
    correctAnswer: "0, 1, 2",
    explanation: "The `for` loop iterates from `i = 0` to `i < 3`, logging `0`, `1`, and `2` to the console."
  },
  {
    question: "What does this code return: `let x = 5; if (x > 3) { return 'big'; } else { return 'small'; }`?",
    options: ["big", "small", "undefined", "null"],
    correctAnswer: "big",
    explanation: "The `if` statement checks if `x > 3`. Since `x` is 5, it returns `'big'`."
  },
  {
    question: "How do you access the property `name` of an object `person = { name: 'Alice' }`?",
    options: ["person[name]", "person.name", "person::name", "person->name"],
    correctAnswer: "person.name",
    explanation: "In JavaScript, object properties are accessed using dot notation (`object.property`) or bracket notation (`object['property']`). Here, `person.name` retrieves `'Alice'`."
  },
  {
    question: "What is the output of `let x = 10; { let x = 20; } console.log(x);`?",
    options: ["10", "20", "undefined", "ReferenceError"],
    correctAnswer: "10",
    explanation: "The `let` keyword is block-scoped. The `x` inside the block is a different variable from the outer `x`. The outer `x` remains `10` and is logged."
  },


];

const JavaScriptQuiz = () => {
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
      {/*<ProductNavbar buyLink="https://your-store.com/javascript-guide" />  Updated purchase link */}
      <div className="quiz-container">
        <h1 className="quiz-title">🎮 JavaScript Basics Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of JavaScript fundamentals with this interactive quiz! Answer questions on variables, functions, arrays, and more. Get instant feedback and learn as you go!
        </p>

        {currentQuestion === -1 ? (
          <div className="quiz-result">
            <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
            <p className="quiz-description">
              Your score: <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <p className="quiz-description">
              {score === questions.length
                ? "Perfect score! You're a JavaScript pro!"
                : score >= questions.length / 2
                ? "Great job! You're getting the hang of JavaScript basics."
                : "Keep practicing! Try again to improve your score."}
            </p>
            <button className="quiz-button" onClick={handleRestart}>
              Restart Quiz
            </button>
            <a
              href="https://your-store.com/javascript-guide" // Updated purchase link
              className="quiz-buy-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More with JavaScript Guide
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

export default JavaScriptQuiz;