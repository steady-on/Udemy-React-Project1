import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartDataPoints }) => {
  const dataPointValue = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
