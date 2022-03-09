import "./StatisticButtons.css";

function StatisticButtons({ options, onIncrement }) {
  return options.map((option, index) => (
    <button
      key={index}
      name={option}
      onClick={() => {
        onIncrement(option);
      }}
      className="statsBtn"
    >
      {option.charAt(0).toLocaleUpperCase() + option.slice(1)}
    </button>
  ));
}

export default StatisticButtons;
