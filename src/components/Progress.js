function Progress({ index, numQuestion, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Вопрос <strong>{index + 1}</strong> / {numQuestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints} баллов
      </p>
    </header>
  );
}

export default Progress;
