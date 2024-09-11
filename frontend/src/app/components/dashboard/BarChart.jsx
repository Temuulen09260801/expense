import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({}) => {
  const [barChartInfo, setBarChartInfo] = useState(null);
  const getBarChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      setBarChartInfo(res.data);
    } catch (error) {
      toast.error("failed");
    }
  };
  useEffect(() => {
    getBarChartData();
  }, []);
  const lbl = barChartInfo?.bar.map((b) => b.sar);
  const exp = barChartInfo?.bar.map((b) => b.total_exp);
  const inc = barChartInfo?.bar.map((b) => b.total_inc);
  const data1 = {
    labels: lbl,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: inc,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: exp,
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card h-[228px]">
      {/* {barChartData && <Bar data={data1} options={options1} />} */}
      <Bar data={data1} options={options1} />
      {/* {!barChartData && (
        <div className="flex items-end justify-center w-full gap-4 ">
          <div className="w-4 skeleton h-14"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 skeleton h-14"></div>
        </div>
      )} */}
    </div>
  );
};

export default BarChart;
