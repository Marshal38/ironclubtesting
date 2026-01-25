function FinishedScreen({ points, maxPoints }) {
  const percent = (points / maxPoints) * 100;

  let emoji;
  let resultMassege;

  if (percent === 100) {
    emoji = "🥇";
    resultMassege = "Вы молодец!";
  } else if (percent >= 80 && percent < 100) {
    emoji = "🎉";
    resultMassege = "Вы справились!";
  } else if (percent >= 50 && percent < 80) {
    emoji = "🙃";

    resultMassege = "Вы справились, но надо немного вспомнить теорию!";
  } else if (percent > 0 && percent < 50) {
    emoji = "🤨";
    resultMassege = "Вы не прошли!";
  } else if (percent === 0) {
    emoji = "🤦‍♂️";
    resultMassege = "Пройдите обучение!";
  }

  return (
    <>
      <p className="result">
        Ваш результат: <strong>{points}</strong> баллов из {maxPoints} (
        {Math.ceil(percent)}%)
      </p>

      <p className="emoji">{emoji}</p>
      <p className="result">{resultMassege}</p>
    </>
  );
}

export default FinishedScreen;
