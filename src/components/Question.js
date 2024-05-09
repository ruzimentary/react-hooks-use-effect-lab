import { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    if (secondsRemaining === 0) {
      onAnswered(false);
      setSecondsRemaining(10);
      return;
    }

    const timer = setTimeout(() => {
      setSecondsRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.answers.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p>{secondsRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
