import React, { useState } from 'react';
import Navbar from './Navbar';
import './JavaScriptQuiz.css'; // Reuse the CSS, as styles are general

const questions = [
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    correctAnswer: "def",
    explanation: "In Python, functions are defined using the `def` keyword followed by the function name and parentheses, e.g., `def my_function():`."
  },
  {
    question: "What is the output of `print(type(5.0))`?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    correctAnswer: "<class 'float'>",
    explanation: "The `type()` function returns the type of the object. `5.0` is a floating-point number, so it returns `<class 'float'>`."
  },
  {
    question: "How do you add an element to the end of a list in Python?",
    options: ["list.push(item)", "list.add(item)", "list.append(item)", "list.insert(item)"],
    correctAnswer: "list.append(item)",
    explanation: "The `append()` method adds an element to the end of a list, e.g., `my_list.append(4)`."
  },
  {
    question: "What does this code print: `for i in range(3): print(i)`?",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "3 2 1 0"],
    correctAnswer: "0 1 2",
    explanation: "The `range(3)` generates numbers from 0 to 2 (exclusive of 3), so the loop prints 0, 1, and 2."
  },
  {
    question: "Which of these is a mutable data type in Python?",
    options: ["Tuple", "String", "List", "Set"],
    correctAnswer: "List",
    explanation: "Lists are mutable, meaning their elements can be changed after creation. Tuples and strings are immutable."
  },
  {
    question: "What is the result of `2 ** 3` in Python?",
    options: ["5", "6", "8", "9"],
    correctAnswer: "8",
    explanation: "The `**` operator is used for exponentiation. `2 ** 3` calculates 2 raised to the power of 3, which is 8."
  },
  {
    question: "How do you check if a key exists in a dictionary?",
    options: ["key in dict", "dict.has_key(key)", "dict.contains(key)", "key exists dict"],
    correctAnswer: "key in dict",
    explanation: "The `in` operator checks for membership in collections like dictionaries, e.g., `'key' in my_dict`."
  },
  {
    question: "What does `len('hello')` return?",
    options: ["4", "5", "6", "Error"],
    correctAnswer: "5",
    explanation: "The `len()` function returns the length of a string or collection. 'hello' has 5 characters."
  },
  {
    question: "Which statement is used to handle exceptions in Python?",
    options: ["catch", "except", "try-except", "error"],
    correctAnswer: "try-except",
    explanation: "Python uses `try` blocks to test code for errors and `except` blocks to handle them, e.g., `try: ... except: ...`."
  },
  {
    question: "What is the output of `print('Hello' + ' ' + 'World')`?",
    options: ["HelloWorld", "Hello World", "Hello + World", "Error"],
    correctAnswer: "Hello World",
    explanation: "The `+` operator concatenates strings in Python, adding a space between 'Hello' and 'World'."
  }
];

const PythonQuiz = () => {
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
      <Navbar buyLink="https://your-store.com/python-basics" />
      <div className="quiz-container">
        <h1 className="quiz-title">🎮 Python Basics Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of Python fundamentals with this interactive quiz! Answer questions on variables, functions, lists, and more. Get instant feedback and learn as you go!
        </p>

        {currentQuestion === -1 ? (
          <div className="quiz-result">
            <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
            <p className="quiz-description">
              Your score: <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <p className="quiz-description">
              {score === questions.length
                ? "Perfect score! You're a Python pro!"
                : score >= questions.length / 2
                ? "Great job! You're getting the hang of Python basics."
                : "Keep practicing! Try again to improve your score."}
            </p>
            <button className="quiz-button" onClick={handleRestart}>
              Restart Quiz
            </button>
            <a
              href="https://your-store.com/python-basics"
              className="quiz-buy-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More with Python Basics
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

export default PythonQuiz;