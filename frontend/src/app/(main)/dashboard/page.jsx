"use client";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/app/utils/util";
import { UserContext } from "@/app/context/user-context";

const Dashboard = () => {
  const { user, fetchUserData } = useContext(UserContext);
  // const { user } = useContext(UserContext);
  // const [transactionData, setTransactionData] = useState([]);

  // const fetchTransactions = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/records/${user.id}`);
  //     setTransactionData(res.data);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to fetch transactions");
  //   }
  // };

  // useEffect(() => {
  //   if (user && user.id) {
  //     fetchTransactions();
  //   }
  // }, [user.id]);

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        <h1>{user?.user?.name}</h1>
        {/* {transactionData?.transactions?.map((transaction, index) => {
          return (
            <div key={index} className="flex">
              <img src="/income.svg" alt="income" />
              <div>
                <p className="mb-1">{transaction?.name}</p>
                <p className="text-[#6B7280]">{transaction?.createdat}</p>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Dashboard;
