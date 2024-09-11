import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({}) => {
  const [donChartInfo, setDonChartInfo] = useState(null);
  const getDonChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      setDonChartInfo(res.data);
    } catch (error) {
      toast.error("failed");
    }
  };
  useEffect(() => {
    getDonChartData();
  }, []);
  const lbl = donChartInfo?.donut.map((d) => d.cat_name);
  const cost = donChartInfo?.donut.map((d) => d.sum);

  const data2 = {
    datasets: [
      {
        data: cost,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: lbl,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card h-[228px]">
      <div className="h-[228px]">
        <Doughnut options={options2} data={data2} />
        {/* {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="w-24 h-24 rounded-full skeleton"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DoughnutChart;
