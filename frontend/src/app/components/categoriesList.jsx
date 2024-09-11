import React, { useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import axios from "axios";
import { IoMdEye } from "react-icons/io";

const CategoriesList = () => {
  const [cat, setCat] = useState(null);
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      setCat(res.data);
    } catch (error) {
      toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col justify">
      {cat?.category.map((o) => (
        <div className="flex gap-2 items-center">
          <IoMdEye size={20} />
          <p className="text-base text-[#1F2937]">{o.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
