import React from "react";
import logo from "/src/assets/icons/logo.png";
import fb from "/src/assets/icons/footer/fb.png";
import ig from "/src/assets/icons/footer/ig.png";
import tw from "/src/assets/icons/footer/tw.png";

function Footer() {
  return (
    <footer className="sm:w-full sm:h-[272px] bg-blue-900 flex items-center justify-center">
      <div className="sm:w-[343px] sm:h-[208px] sm:mt-8 xl:flex xl:w-[1120px] xl:h-[48px] xl:flex-row xl:items-center xl:justify-between">
        <img src={logo} alt="" />

        <div className="sm:gap-4 sm:mt-8 xl:flex xl:flex-row xl:items-center xl:space-x-4 xl:gap-16">
          <p className="text-white sm:pt-4 xl:pt-0 xl:text-base cursor-pointer">
            All Courses
          </p>
          <p className="text-white sm:pt-2 xl:pt-0 xl:text-base cursor-pointer">
            Bundle Package
          </p>
        </div>

        <div className="sm:gap-4 xl:flex xl:items-center xl:space-x-4 sm:flex sm:pt-[32px] sm:gap-[16px">
          <img src={fb} alt="" className="xl:w-12 xl:h-12 cursor-pointer" />
          <img src={ig} alt="" className="xl:w-12 xl:h-12 cursor-pointer" />
          <img src={tw} alt="" className="xl:w-12 xl:h-12 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
