function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return null;

  if (index < numQuestion - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Следующий вопрос
      </div>
    );

  if (index === numQuestion - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "Finish" })}>
        К результату!
      </div>
    );
}

export default NextButton;
