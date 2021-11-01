import React, { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const DisplayStats = ({ text, count }) => {
  return (
    <p>
      {text} {count}
    </p>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const avg = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedbacks given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <DisplayStats text="good" count={good} />
      <DisplayStats text="neutral" count={neutral} />
      <DisplayStats text="bad" count={bad} />
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
