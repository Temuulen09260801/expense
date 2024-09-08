"use client";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/app/utils/util";
import { UserContext } from "@/app/context/user-context";
import { HiSignal } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import AddRecord from "@/app/components/addRecord";

// Doughnut
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// Doughnut end

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);

  // Doughnut
  const data = {
    label: ["Yes", "No"],
    datasets: [
      {
        label: "Poll",
        data: [3, 6],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
      },
    ],
  };

  const options = {};
  // Doughnut end

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("DD", res.data.records);
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  console.log("trans data", transactions);

  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
  }, [user]);

  return (
    <div>
      <div className="max-w-[2000px] mx-auto  mt-8">
        {/*  */}
        <div className="w-full flex justify-between h-[240px]">
          <div className="bg-[#0166FF] w-[600px] h-full rounded-[18px] p-8 flex justify-between">
            <div className="flex flex-col justify-between">
              <img src="/img/Geld-white.png" alt="photo" className="w-20" />
              <div>
                <p className="text-base text-white opacity-50">Cash</p>
                <p className="text-2xl font-semibold text-white">1000</p>
              </div>
            </div>
            <HiSignal size={40} color="white" />
          </div>
          <div className="w-[600px] h-full rounded-[18px] bg-white">
            <div className="flex gap-2 items-center border-b-[1px] px-6 py-4 border-[#E2E8F0]">
              <GoDotFill size={8} color="#84CC16" />
              <p className="font-semibold text-base">Your Income</p>
            </div>
            <div className="py-5 px-6">
              <h3 className="text-4xl font-semibold">
                {cardInfo?.income.sum}₮
              </h3>
              <p className="text-[18px] text-[#64748B] mt-1">
                Your Income Amount
              </p>
              <div className="mt-[18px] flex gap-2 items-center">
                <FaCircleArrowUp size={19.5} color="#84CC16" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
          <div className="w-[600px] h-full rounded-[18px] bg-white">
            <div className="flex gap-2 items-center border-b-[1px] px-6 py-4 border-[#E2E8F0]">
              <GoDotFill size={8} color="#0166FF" />
              <p className="font-semibold text-base">Total Expenses</p>
            </div>
            <div className="py-5 px-6">
              <h3 className="text-4xl font-semibold">
                -{cardInfo?.expense.sum}₮
              </h3>
              <p className="text-[18px] text-[#64748B] mt-1">
                Your expence Amount
              </p>
              <div className="mt-[18px] flex gap-2 items-center">
                <FaCircleArrowDown size={19.5} color="#0166FF" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex mt-6 gap-6">
          <div className="w-1/2 rounded-xl">
            <div className="border-b-[1px] border-[#E2E8F0] bg-white px-4 py-6 text-base font-semibold rounded-t-xl">
              Income - Expense
            </div>
            <div className=" h-[284px] bg-white px-6 py-8 rounded-b-xl">
              <Doughnut data={data} options={options}></Doughnut>
            </div>
          </div>
          <div className="w-1/2 rounded-xl">
            <div className="border-b-[1px] border-[#E2E8F0] bg-white px-4 py-6 text-base font-semibold rounded-t-xl">
              Income - Expense
            </div>
            <div className=" h-[284px] bg-white px-6 py-8 rounded-b-xl">
              <Doughnut data={data} options={options}></Doughnut>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="border-b-[1px] border-[#E2E8F0] bg-white px-4 py-6 mt-6 text-base font-semibold rounded-t-xl">
          Last records
        </div>
        {/* GUILGEENII JAGSAALT */}
        {transactions?.map((tr) => (
          <div className="flex justify-between items-center px-6 py-5 border-b-[1px] border-[#E5E7EB] bg-white">
            <div className="flex gap-4">
              <img src="/img/home.svg" alt="income" />
              <div>
                <p className="text-base">{tr?.name}</p>
                <p className="text-xs text-[#6B7280]">{tr?.created_at}</p>
              </div>
            </div>
            <div>{tr?.amount}₮</div>
          </div>
        ))}
        {/* <AddRecord /> */}
      </div>
    </div>
  );
};

export default Dashboard;
