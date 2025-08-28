import React, { useState } from 'react';
import Navbar from './Navbar';
import './JavaScriptQuiz.css'; // Reuse the same CSS for consistency

const questions = [
  {
    question: "What is a Docker container?",
    options: [
      "A virtual machine with a full OS",
      "A lightweight, isolated environment for running applications",
      "A cloud storage service",
      "A type of database"
    ],
    correctAnswer: "A lightweight, isolated environment for running applications",
    explanation: "Docker containers are lightweight, portable units that package an application and its dependencies, sharing the host OS kernel."
  },
  {
    question: "What command is used to build a Docker image from a Dockerfile?",
    options: [
      "docker run",
      "docker build",
      "docker compose",
      "docker image"
    ],
    correctAnswer: "docker build",
    explanation: "The `docker build` command creates an image from a Dockerfile, e.g., `docker build -t my-image .`."
  },
  {
    question: "What is the purpose of a Dockerfile?",
    options: [
      "To store container logs",
      "To define the instructions for building a Docker image",
      "To manage network configurations",
      "To run Docker containers"
    ],
    correctAnswer: "To define the instructions for building a Docker image",
    explanation: "A Dockerfile contains a set of instructions (e.g., `FROM`, `COPY`, `RUN`) to build a Docker image."
  },
  {
    question: "How do you run a Docker container in detached mode?",
    options: [
      "docker run -it my-image",
      "docker run -d my-image",
      "docker start my-image",
      "docker exec -d my-image"
    ],
    correctAnswer: "docker run -d my-image",
    explanation: "The `-d` flag in `docker run -d` runs the container in detached mode, allowing it to run in the background."
  },
  {
    question: "What does the `docker pull` command do?",
    options: [
      "Starts a container",
      "Downloads an image from a registry",
      "Removes an image",
      "Builds a container"
    ],
    correctAnswer: "Downloads an image from a registry",
    explanation: "`docker pull` fetches an image from a registry like Docker Hub, e.g., `docker pull ubuntu`."
  },
  {
    question: "What is the purpose of Docker Compose?",
    options: [
      "To manage single-container applications",
      "To define and run multi-container Docker applications",
      "To optimize container performance",
      "To secure Docker images"
    ],
    correctAnswer: "To define and run multi-container Docker applications",
    explanation: "Docker Compose uses a YAML file to configure and run multiple containers as a single application."
  },
  {
    question: "How do you map a host port to a container port in Docker?",
    options: [
      "docker run -p host:container",
      "docker run -m host:container",
      "docker run -v host:container",
      "docker run -link host:container"
    ],
    correctAnswer: "docker run -p host:container",
    explanation: "The `-p` flag maps a host port to a container port, e.g., `docker run -p 8080:80` maps host port 8080 to container port 80."
  },
  {
    question: "What command lists all running Docker containers?",
    options: [
      "docker ps",
      "docker list",
      "docker containers",
      "docker images"
    ],
    correctAnswer: "docker ps",
    explanation: "`docker ps` lists all currently running containers; `docker ps -a` includes stopped containers."
  },
  {
    question: "What is a Docker volume used for?",
    options: [
      "To store Docker images",
      "To persist data outside of a container’s lifecycle",
      "To increase container CPU usage",
      "To network containers together"
    ],
    correctAnswer: "To persist data outside of a container’s lifecycle",
    explanation: "Docker volumes provide persistent storage that exists independently of containers, e.g., `docker volume create my-volume`."
  },
  {
    question: "What does the `docker stop` command do?",
    options: [
      "Removes a container",
      "Pauses a container",
      "Gracefully stops a running container",
      "Restarts a container"
    ],
    correctAnswer: "Gracefully stops a running container",
    explanation: "`docker stop` sends a SIGTERM signal to gracefully stop a container, e.g., `docker stop my-container`."
  }
];

const DockerQuiz = () => {
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
      <Navbar buyLink="https://your-store.com/docker-basics" />
      <div className="quiz-container">
        <h1 className="quiz-title">🎮 Docker Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of Docker fundamentals with this interactive quiz! Answer questions on containers, images, commands, and more. Get instant feedback and learn as you go!
        </p>

        {currentQuestion === -1 ? (
          <div className="quiz-result">
            <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
            <p className="quiz-description">
              Your score: <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <p className="quiz-description">
              {score === questions.length
                ? "Perfect score! You're a Docker pro!"
                : score >= questions.length / 2
                ? "Great job! You're getting the hang of Docker basics."
                : "Keep practicing! Try again to improve your score."}
            </p>
            <button className="quiz-button" onClick={handleRestart}>
              Restart Quiz
            </button>
            <a
              href="https://your-store.com/docker-basics"
              className="quiz-buy-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More with Docker Basics
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

export default DockerQuiz;