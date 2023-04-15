import React from "react";

const Bannar2 = () => {
  return (
    <div className="xxl:mb-96 xl:mb-96 lg:mb-96 sm:mb-20 pb-96">
      <div className="">
        <section className="bg-cover absolute w-full left-0 xxl:h-4/5 xl:h-full xl:bg-heroBanner2 lg:bg-heroBanner2 lg:h-full md:bg-black2 sm:bg-black2">
          <div className=" xxl:py-60 xl:py-60 lg:py-60 sm:py-20">
            <div className="mx-auto flex flex-col xxl:items-center xl:items-center lg:items-center  xxl:justify-between xl:justify-between lg:justify-between sm:text-center w-full">
              <h1 className="font-bold text-white xxl:text-6xl xl:text-6xl lg:text-5xl sm:text-4xl">
                Download the app now.
              </h1>
              <p className="mt-10 xxl:text-3xl xl:text-3xl lg:text-2xl xxl:text-white xl:text-white lg:text-white sm:text-greySecond">
                Available on your favorite store. Start your premium experience
                now
              </p>
            </div>
            <div className="flex items-center justify-center mt-10">
              <button
                className="
              font-bold 
              text-textWhite
            bg-primary
            lg:text-xl
            lg:relative
            lg:w-40
            lg:h-20
            rounded-lg shadow-boxShadow
            mr-8
            md:w-40
            md:h-12
            md:text-lg
            sm:w-40
            sm:h-16
            sm:mt-5
            sm:mb-5
            sm:ml-5
            "
              >
                Playstore
              </button>
              <button
                className="
             lg:text-xl
             font-bold lg:text-textWhite
            bg-transparent
             lg:border-2
             lg:border-solid  lg:border-white
              lg:w-52 lg:h-20 
              rounded-lg 
              shadow-boxShadow
              md:w-40
              md:h-12
              md:text-lg
              sm:w-48 sm:h-16
              sm:border-solid
              sm:border-2
              sm:border-primary
              sm:text-primary"
              >
                App store
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bannar2;
