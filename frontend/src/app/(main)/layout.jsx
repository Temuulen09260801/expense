"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "../components";
import axios from "axios";
import { apiUrl } from "../utils/util";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  // const router = useRouter();
  // const [user, setUser] = useState(null);
  // const getData = async () => {
  //   const res = await axios.get("http://localhost:8008/users/profile", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   console.log("data", res.data);
  //   setUser(res.data.user[0]);
  // };
  console.log("USER SHALGAH", user);

  useEffect(() => {
    fetchUserData();
    // getData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <Header user={user} logOut={logOut} />
      {/* <header>User: {user.user[0]?.name}</header> */}
      {children}
    </div>
  );
};

export default Layout;
