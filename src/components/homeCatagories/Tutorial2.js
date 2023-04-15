import React from "react";
import mobile2 from "../../assets/images/mobile4.png";
const Tutorial2 = () => {
  return (
    <div className="mb-1 xxl:container xl:container lg:container xxl:mx-auto xl:mx-auto lg:mx-auto xxl:pl-4 xl:pl-0 lg:pl-0">
      <div className="grid grid-rows-1">
        <div className="grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 items-center  justify-around">
          <div className="xxl:ml-36 xl:ml-28 lg:ml-20 xxl:text-left xl:text-left lg:text-left sm:text-center">
            <h4 className="xxl:text-2xl xl:text-2xl lg:text-lg font-bold text-primary mb-8 sm:text-2xl">
            Explore Varieties
            </h4>
            <h1 className="xxl:text-5xl xl:text-5xl lg:text-4xl text-black2 !leading-normal font-bold sm:text-4xl">
              Shop for your favorites meal as a day hot
            </h1>
            <p className="xxl:text-2xl xl:text-2xl lg:text-lg  text-greySecond mt-10 sm:text-2xl">
              Shop for your favorite meals or drinks and enjoy while doing it
            </p>
          </div>
          <div className="xx:ml-48 xl:ml-28 lg:ml-14 lg:relative lg:left-10">
            <img src={mobile2} alt=""   className="xxl:h-auto xl:h-auto lg:h-auto sm:h-auto xxl:w-full xl:w-full lg:w-full sm:w-fit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial2;
