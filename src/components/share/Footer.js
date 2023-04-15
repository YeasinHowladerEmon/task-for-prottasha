import React from "react";
import logo from "../../assets/images/Log.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <section className="container mx-auto xxl:container xl:container lg:container xxl:mx-auto xl:mx-auto lg:mx-auto sm:mb-10 xxl:mb-0 xl:mb-0 lg:mb-0">
        <div className="xxl:flex xl:flex lg:flex sm:grid sm:grid-col items-center justify-between  xxl:mx-10 xl:mx-10 lg:mx-10 xl:my-5 xxl:my-5 lg:my-5 xxl:py-5 xl:py-5 lg:py-5">
          <div className="xxl:block xl:block lg:block sm:hidden ">
            <img src={logo} alt="" />
          </div>
          <div className="mt-10 sm:text-center ">
            <FontAwesomeIcon className="text-primary text-4xl mr-10" icon={faTwitter} />
            <FontAwesomeIcon className="text-primary text-4xl mr-10" icon={faFacebook} />
            <FontAwesomeIcon className="text-primary text-4xl" icon={faInstagram} />
          </div>
          <div className="xxl:mt-10 xl:mt-10 lg:mt-10 sm:mt-5 sm:text-center">
            <p className="text-black2 text-1xl text-bold xxl:block xl:block lg:block sm:hidden">
              Copyright 2020 Bella Onojia.com
            </p>
            <p className="text-black2 text-1xl xxl:hidden text-bold xl:hidden lg:hidden sm:block">
              Just type what's on-your mind and we'll
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
