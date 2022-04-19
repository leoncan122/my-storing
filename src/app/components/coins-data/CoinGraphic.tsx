import { Chart } from "react-chartjs-2";
import useFetch from "../../hooks/useFetch";

const CoinGraphic = () => {
  const label = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const data = {
    labels: label,
    datasets: [
      {
        type: "line" as const,
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        data: [
          100, 200, 300, 400, 234, 243, 213, 233, 213, 344, 124, 90, 12, 34, 67,
          89, 123, 125, 151, 134, 123, 156, 234, 345, 344, 321,
        ],
        pointRadius: 0,
        backgrounColor: "rgba(255, 99, 132, 50)",
        // width: "170",
        // height: "100",
      },
    ],
  };
  const response = useFetch(
    "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=eur&days=10&interval=100"
  );
  console.log(response);
  return (
    <div className="w-35 h-15">
      <Chart
        data={data}
        type={"line"}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
};
export default CoinGraphic;
