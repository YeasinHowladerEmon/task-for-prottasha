import React from "react";
import mobile1 from "../../assets/images/mobile3.png";
const Tutorial1 = () => {
  return (
    <div className="mb-1 xxl:container xl:container lg:container xxl:mx-auto xl:mx-auto lg:mx-auto xxl:pl-4 xl:pl-0">
      <div className="grid grid-rows-1">
        <div className="grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 items-center  justify-around">
          <div className="xxl:ml-20 xl:ml-10 xxl:block xl:block lg:block xxl:order-1 xl:order-1 lg:order-1 sm:order-2">
            <img
              src={mobile1}
              alt=""
              className="xxl:h-auto xl:h-auto lg:h-auto sm:h-auto xxl:w-full xl:w-full lg:w-full sm:w-fit"
            />
          </div>
          <div className="xxl:order-2 xl:order-2 lg:order-2 xxl:text-left xl:text-left lg:text-left sm:order-1 sm:text-center">
            <h4 className="xxl:text-2xl xl:text-2xl font-bold text-primary mb-8 lg:text-lg sm:text-2xl">
              Create an account
            </h4>
            <h1 className="xxl:text-5xl xl:text-5xl lg:text-4xl !leading-normal font-bold text-black2 sm:text-4xl">
              Create/login to an existing account to get started
            </h1>
            <p
              className="xxl:text-2xl xl:text-2xl
        lg:text-lg text-greySecond mt-10 sm:text-2xl"
            >
              An account is created with your email and a desired password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial1;
