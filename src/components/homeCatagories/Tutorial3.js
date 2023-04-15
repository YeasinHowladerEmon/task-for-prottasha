import React from "react";
import mobile5 from "../../assets/images/mobile5.png";
const Tutorial3 = () => {
  return (
    <div className="mb-1 xxl:container xl:container lg:container xxl:mx-auto xl:mx-auto lg:mx-auto xxl:pl-4 xl:pl-0 lg:pl-0">
      <div className=" grid grid-rows-1">
        <div className="grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 items-center justify-around">
          <div className="xxl:ml-20 xl:ml-10 xxl:block xl:block lg:block xxl:order-1 xl:order-1 lg:order-1 sm:order-2">
            <img src={mobile5} alt=""  className="xxl:h-auto xl:h-auto lg:h-auto sm:h-auto xxl:w-full xl:w-full lg:w-full sm:w-fit" />
          </div>
          <div className="xxl:order-2 xl:order-2 lg:order-2 xxl:text-left xl:text-left lg:text-left sm:order-1 sm:text-center">
            <h4 className="xxl:text-2xl xl:text-2xl lg:text-lg font-bold text-primary mb-8 sm:text-2xl ">Checkout</h4>
            <h1 className="xxl:text-5xl xl:text-5xl lg:text-4xl text-black2 !leading-normal font-bold sm:text-4xl">
              When you done check out and get it delivered
            </h1>
            <p className="xxl:text-2xl xl:text-2xl lg:text-lg text-greySecond mt-10 sm:text-2xl">
              When you done check out and get it delivered with ease
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial3;
