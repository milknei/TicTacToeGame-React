const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li className={index === 0 ? 'hidden' : ''} key={`${index}`}>
            <button
              type="button"
              className={`btn-move  ${currentMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
            >
              {index === currentMove
                ? `Move № ${index}`
                : `Go to move № ${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
