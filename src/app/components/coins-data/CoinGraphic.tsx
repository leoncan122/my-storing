import { Chart } from "react-chartjs-2";

const CoinGraphic = ({ coin }: any) => {
  const label = Array.from(Array(168).keys());
  // [...Array(169).keys()]
  const data = {
    labels: label,
    datasets: [
      {
        type: "line" as const,
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        data: coin.sparkline_in_7d.price,
        pointRadius: 0,
        backgrounColor: "rgba(255, 99, 132, 50)",
        // width: "170",
        // height: "100",
      },
    ],
  };

  return (
    <td className="p-3 text-sm">
      <div className="w-35 h-15">
        <Chart
          data={data}
          type={"line"}
          height={68}
          width={160}
          options={{
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
                //min: 0
                //max: 0
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    </td>
  );
};
export default CoinGraphic;
