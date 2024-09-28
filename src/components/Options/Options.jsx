import css from './Options.module.css'

const Options = ({ totalFeedback, updateGood, updateNeutral, updateBad, reset }) => {
  return (
    <div>
      <button className={css.button} onClick={updateGood}>Good</button>
      <button className={css.button} onClick={updateNeutral}>Neutral</button>
      <button className={css.button} onClick={updateBad}>Bad</button>
      {totalFeedback > 0 && (<button className={css.button} onClick={reset}>Reset</button>)}
    </div>
  );
};

export default Options;