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

const Dashboard = () => {
  // const { user, fetchUserData } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/`);
      console.log("res data", res);
      console.log("DD", res.data.records);
      setTransactionData(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("res data", res);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  console.log("trans data", transactionData);

  useEffect(() => {
    if (user && user?.id) {
      fetchTransactions();
      getInfoCardData;
    }
  }, [user?.id]);

  return (
    <div>
      <div className="max-w-[2000px] mx-auto  mt-8">
        <h1>{user?.name}</h1>
        {/*  */}
        <div className="w-full flex justify-between h-[240px]">
          <div className="bg-[#0166FF] w-[600px] h-full rounded-[18px] p-8 flex justify-between">
            <div className="flex flex-col justify-between">
              <img src="/img/Geld-white.png" alt="photo" className="w-20" />
              <div>
                <p className="text-base text-white opacity-50">Cash</p>
                <p className="text-2xl font-semibold text-white">
                  {transactionData?.amount}
                </p>
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
                {cardInfo?.income.sum}T
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
                {cardInfo?.expense.sum}T
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
        <div>
          <div></div>
          <div></div>
        </div>
        {/*  */}
        <div></div>
        {/* GUILGEENII JAGSAALT */}
        {transactionData?.transactions?.map((transaction, index) => {
          // return (
          //   // <div key={index} className="flex">
          //   //   <img src="/income.svg" alt="income" />
          //   //   <div>
          //   //     <p className="mb-1">{transaction?.name}</p>
          //   //     <p className="text-[#6B7280]">{transaction?.createdat}</p>
          //   //   </div>
          //   // </div>
          //   div
          // );
          <div>[tr.name]</div>;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
