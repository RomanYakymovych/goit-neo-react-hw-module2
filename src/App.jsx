import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification";
import { useState, useEffect } from "react";
import css from "./App.module.css";

const App = () => {
  const [feedbackCount, setFeedbackCount] = useState(() => {
    const savedFeedbackCount = window.localStorage.getItem("feedbackCount");
    return savedFeedbackCount
      ? JSON.parse(savedFeedbackCount)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (type) => {
    setFeedbackCount((prevCount) => ({
      ...prevCount,
      [type]: prevCount[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackCount({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback =
    feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;

  const positivePercentage = Math.round(
    (feedbackCount.good / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("feedbackCount", JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateGood={() => updateFeedback("good")}
        updateNeutral={() => updateFeedback("neutral")}
        updateBad={() => updateFeedback("bad")}
        reset={resetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedbackCount={feedbackCount}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
};

export default App;
