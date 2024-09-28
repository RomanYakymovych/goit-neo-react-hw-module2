import css from "./Feedback.module.css";

const Feedback = ({ feedbackCount, totalFeedback, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {feedbackCount.good}</li>
      <li className={css.item}>Neutral: {feedbackCount.neutral}</li>
      <li className={css.item}>Bad: {feedbackCount.bad}</li>
      <li className={css.item}>Total: {totalFeedback}</li>
      <li className={css.item}>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;