import React from "react";
import bothImage1 from "../../assets/images/mobile1.png";
import bothImage2 from "../../assets/images/mobile2.png";
const BothImage = () => {
  return (
    <div className="mb-96 xxl:pb-0 xl:pb-0 lg:pb-0 md:pb-80 sm:pb-20">
      <div className="lg:w-full lg:h-full">
        <div className="flex items-center justify-center ">
          <div
            className="
            absolute
             xxl:top-80
              xxl:mt-56
               xxl:mr-56
                xl:top-96
                 xl:mt-40
                  xl:mr-56
                   lg:top-96
                    lg:mt-40
                     lg:mr-56
                     sm:-ml-20
                     sm:mt-40
                     "
          >
            <img src={bothImage1} alt="" className="xxl:h-full xl:h-full lg:h-full sm:h-full xxl:w-full xl:w-full lg:w-full sm:w-5/6" />
          </div>
          <div
            className="
            absolute
            xxl:top-2/4
            xxl:mt-96
            xxl:ml-52
            xl:top-3/4
            xl:mt-72
            xl:ml-44
            lg:top-3/4
            lg:mt-72
            lg:ml-52
            sm:mt-80
            sm:ml-48
            "
          >
            <img src={bothImage2} alt="" className="xxl:h-full xl:h-full lg:h-full sm:h-full xxl:w-full xl:w-full lg:w-full sm:w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BothImage;
