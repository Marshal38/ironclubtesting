function StartScreen({ numQuest, dispatch }) {
  return (
    <div className="start">
      <h2>Добро пожаловать на тестирование IRON CLUB !</h2>
      <h3>{numQuest} вопросов для тестирования твоего уровня</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Начать
      </button>
    </div>
  );
}

export default StartScreen;
