import React from "react";

// import BannarImage from ''
const Bannar1 = () => {
  return (
    <div className="xxl:mb-80 xl:mb-80 lg:mb-80 sm:mb-96 xxl:pb-80 xl:pb-80 lg:pb-80 sm:pb-96 h-full">
      <div className="">
        <section className="bg-cover absolute w-full left-0 xxl:h-5/6 xl:h-full xl:bg-heroBanner lg:h-full lg:bg-heroBanner md:bg-none sm:bg-none">
          <div className="container mx-auto py-32">
            <div className="mx-auto flex flex-col items-center justify-between w-full">
              <h3 className="font-semibold xl:text-textWhite mb-10 lg:text-textWhite lg:text-2xl xl:text-3xl md:text-2xl md:text-greySecond sm:text-1xl sm:text-greySecond">
                Food App
              </h3>
              <h1 className="font-bold xl:text-textWhite lg:text-textWhite xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl md:text-black2 sm:text-black2 xxl:px-80  xl:px-60 text-center lg:px-48">
                Why stay hungry when you can order from bella Onojie
              </h1>
              <p
                className="mt-10 xl:text-2xl lg:text-2xl md:text-1xl  
            xl:text-white lg:text-white md:text-black2 sm:text-black2"
              >
                Download the bella onoje's food app now on
              </p>
            </div>
            <div className="grid grid-rows-1">
              <div className="grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 items-center justify-center mx-auto mt-10 ">
                <button
                  className="
            font-bold 
            text-textWhite
            bg-primary
          lg:text-xl
          lg:relative
          lg:w-52
          lg:h-16
          rounded-full shadow-boxShadow
          mr-8
          md:w-40
          md:h-12
          md:text-lg
          sm:w-52
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
                lg:w-52 lg:h-16 
                rounded-full 
                shadow-boxShadow
                md:w-40
                md:h-12
                md:text-lg
                sm:w-52 sm:h-16
                sm:border-solid
                sm:border-2
                sm:border-primary
                sm:text-primary
                sm:ml-5"
                >
                  App store
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bannar1;
