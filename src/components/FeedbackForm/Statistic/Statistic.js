import "./Statistic.css";

export default function Statistic(props) {
  const { good, neutral, bad, percent } = props;

  return (
    <ul className="statsList">
      <li className="statsItem">Good: {good}</li>
      <li className="statsItem">Neutral: {neutral}</li>
      <li className="statsItem">Bad: {bad}</li>
      <li className="statsItem">Total: {props.total}</li>
      <li className="statsItem">Positive feedback: {percent}%</li>
    </ul>
  );
}
