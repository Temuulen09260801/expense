import React from "react";

const Login = () => {
  return (
    <section className="w-screen h-screen bg-[#0166FF]">
      <div className="w-1/2 bg-white h-full flex items-center justify-center">
        <div className="flex flex-col w-[384px] gap-[40px] items-center">
          <img src="/img/logo.png" alt="" className="h-[34px] w-[92px]" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Create Geld account
            </h3>
            <p className="mt-2 text-base text-[#334155]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <input
              type="text"
              placeholder="Re-password"
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <button className="btn btn-info bg-[#0166FF] rounded-[20px] py-[10px] border-0 text-xl text-white font-normal">
              Sign up
            </button>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-base text-[#0F172A]">Already have account?</p>
            <p className="btn text-base text-[#0166FF] bg-white border-0 shadow-none">
              Log in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
