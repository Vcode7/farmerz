
"use client";

import React from "react";
import DarkModeSwitcher from "../../../components/Header/DarkModeSwitcher";
import Signup from "@/components/Auth/Signup";



const SignUp: React.FC = () => {
  return (
    <>
   
    <div className="mb-3 mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] relative text-center w-3/4 font-bold leading-[30px] text-dark dark:text-white">
        SING UP
      </h2>
<div>

      <DarkModeSwitcher />
</div>

    </div>

      <div className="rounded-[10px] w-3/4 m-auto bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signup />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <div className="mb-10 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
              FARM TECH
              </div>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign up
              </p>

              <h1 className="mb-4 text-heading-6 font-bold text-dark dark:text-white sm:text-heading-3">
                Create Your New Account
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please completing the necessary
                fields below
              </p>

              <div className="mt-31">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default SignUp;
