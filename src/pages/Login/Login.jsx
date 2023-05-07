import React from "react";
import { BsEnvelopeFill, BsFillLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="w-full md:2/3 lg:w-1/2 mx-auto shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="https://codervent.com/onedash/demo/ltr/assets/images/error/login-img.jpg"
              alt=""
            />
          </div>
          <div className="py-12 px-12 bg-white">
            <div>
              <h3 className="text-[#4c5258] text-[20px] font-[600] capitalize">
                sign in
              </h3>
              <p className="text-[#4c5258] text-[14px] font-normal">
                See your growth and get consulting support!
              </p>
            </div>

            {/* google button  */}
            <div className="w-full flex flex-col ">
              <button className="w-full py-2 border rounded-full capitalize mt-8 flex items-center gap-3 justify-center">
                <span className="">
                  <img
                    className="w-[16px] h-auto"
                    src="https://codervent.com/onedash/demo/ltr/assets/images/icons/search.svg"
                    alt=""
                  />
                </span>
                <span>sign in with google</span>
              </button>
            </div>

            <div className="w-full mt-8 grid grid-cols-3 gap-2 items-center">
              <span className="  h-[1px] bg-black"></span>
              <span className="uppercase bg-white text-center text-[10px]">
                or sign in with email
              </span>
              <span className="  h-[1px] bg-black"></span>
            </div>

            <form className="mt-5">
              <div className=" ">
                <label
                  htmlFor="email"
                  className="text-[#4c5258] text-[14px] capitalize"
                >
                  email address{" "}
                </label>
                <div
                  className="mt-2 ring-1 ring-[#ced4da]  focus:ring-blue flex items-center gap-2 rounded-full
                 px-2 py-1"
                >
                  <span className="text-[12px] text-[#4c5258]">
                    <BsEnvelopeFill />
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="email address"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-3 ">
                <label
                  htmlFor="email"
                  className="text-[#4c5258] text-[14px] capitalize"
                >
                  password{" "}
                </label>
                <div
                  className="mt-2 ring-1 ring-[#ced4da]  focus:ring-1 focus:rign-blue flex items-center gap-2 rounded-full
                 px-2 py-1"
                >
                  <span className="text-[12px] text-[#4c5258]">
                    <BsFillLockFill />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="w-full  "
                  />
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-blue text-white rounded-full py-2 capitalize">
                  sign in
                </button>
                <p className="text-[#4c5258] text-[14px] mt-4">
                  Don't have an account yet?{" "}
                  <Link className="text-blue" to="/sign-up">
                    Sign up here{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
