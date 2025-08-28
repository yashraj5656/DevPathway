import React, { useState } from 'react';
import Navbar from './Navbar';
import './JavaScriptQuiz.css'; // Reuse the same CSS for consistency

const questions = [
  {
    question: "What is the shebang line used for in a BASH script?",
    options: [
      "To comment the script",
      "#!/bin/bash to specify the interpreter",
      "To define variables",
      "To end the script"
    ],
    correctAnswer: "#!/bin/bash to specify the interpreter",
    explanation: "The shebang line, like `#!/bin/bash`, tells the system which interpreter to use to execute the script."
  },
  {
    question: "How do you output text to the console in BASH?",
    options: ["print 'Hello'", "echo 'Hello'", "output 'Hello'", "console.log('Hello')"],
    correctAnswer: "echo 'Hello'",
    explanation: "The `echo` command is used to display text or variables to the standard output, e.g., `echo 'Hello World'`."
  },
  {
    question: "How do you declare a variable in BASH?",
    options: ["let VAR=5", "VAR=5", "var VAR=5", "define VAR=5"],
    correctAnswer: "VAR=5",
    explanation: "Variables in BASH are declared without keywords, e.g., `VAR=5`, and accessed with `$VAR`."
  },
  {
    question: "What does the `$?` variable represent in BASH?",
    options: ["The number of arguments", "The script's PID", "The exit status of the last command", "The current directory"],
    correctAnswer: "The exit status of the last command",
    explanation: "`$?` holds the exit status of the most recently executed command; 0 usually means success."
  },
  {
    question: "How do you start an if statement in BASH?",
    options: ["if [ condition ] then", "if (condition) {", "if condition:", "if { condition }"],
    correctAnswer: "if [ condition ] then",
    explanation: "BASH if statements use `if [ condition ]; then` syntax, with square brackets for testing conditions."
  },
  {
    question: "What command is used to loop over a list of items in BASH?",
    options: ["loop do", "for item in list; do", "while item in list", "repeat item in list"],
    correctAnswer: "for item in list; do",
    explanation: "The `for` loop iterates over a list, e.g., `for i in 1 2 3; do echo $i; done`."
  },
  {
    question: "How do you access the first argument passed to a BASH script?",
    options: ["$0", "$1", "$@", "$#"],
    correctAnswer: "$1",
    explanation: "`$1` refers to the first command-line argument; `$0` is the script name itself."
  },
  {
    question: "What does the `>` operator do in BASH?",
    options: ["Pipes output to another command", "Redirects output to a file", "Appends output to a file", "Reads input from a file"],
    correctAnswer: "Redirects output to a file",
    explanation: "`>` redirects standard output to a file, overwriting it if it exists, e.g., `echo 'text' > file.txt`."
  },
  {
    question: "How do you define a function in BASH?",
    options: [
      "function myFunc() { ... }",
      "def myFunc(): ...",
      "myFunc = function() { ... }",
      "func myFunc { ... }"
    ],
    correctAnswer: "function myFunc() { ... }",
    explanation: "Functions are defined with `function name() { commands; }` or simply `name() { commands; }`."
  },
  {
    question: "What does the `|` operator do in BASH?",
    options: ["Redirects input", "Pipes output from one command to another", "Appends to a file", "Tests conditions"],
    correctAnswer: "Pipes output from one command to another",
    explanation: "The pipe `|` sends the output of one command as input to another, e.g., `ls | grep 'file'`."
  }
];

const BashQuiz = () => {
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
      <Navbar buyLink="https://your-store.com/bash-scripting-basics" />
      <div className="quiz-container">
        <h1 className="quiz-title">🎮 BASH Scripting Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of BASH scripting fundamentals with this interactive quiz! Answer questions on commands, variables, loops, and more. Get instant feedback and learn as you go!
        </p>

        {currentQuestion === -1 ? (
          <div className="quiz-result">
            <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
            <p className="quiz-description">
              Your score: <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <p className="quiz-description">
              {score === questions.length
                ? "Perfect score! You're a BASH scripting pro!"
                : score >= questions.length / 2
                ? "Great job! You're getting the hang of BASH scripting basics."
                : "Keep practicing! Try again to improve your score."}
            </p>
            <button className="quiz-button" onClick={handleRestart}>
              Restart Quiz
            </button>
            <a
              href="https://your-store.com/bash-scripting-basics"
              className="quiz-buy-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More with BASH Scripting Basics
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

export default BashQuiz;