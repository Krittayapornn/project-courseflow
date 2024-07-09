import React from "react";

function UserProfile() {
  return (
    <div>
      <div className="shadow-xl w-full h-[8rem]  bg-white flex flex-col justify-center items-center pb-3 fixed bottom-0 lg:left-[16rem] lg:fixed lg:w-[357px] lg:h-[396px] lg:top-[16rem] lg:rounded-xl">
        <div className="flex gap-3 pr-[110px] mr-8 lg:flex-col lg:justify-center lg:items-center lg:pr-0 lg:mr-0 lg:mb-5">
          <img
            className="object-cover w-[40px] h-[40px] border rounded-full m-4 lg:w-[120px] lg:h-[120px] lg:m-0"
            src="https://s3-alpha-sig.figma.com/img/2b7e/2c3d/750e4573bd7bf79b3d2c03a991655bef?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gj7LWb8JbuZ-sWkIqtSILNnEegrwGfBMeg3uL8LOgGOuQkwcSsvEdz0bL2l1sfbN~MQ6EKpzK44Cg54ZX7NPReZu2VUyX1eBrvtWtqRiVZALVuYF1CkcvUtWdeiBF0MqOMM4LP5nXsoQ~zFZD2RHBUQTU8~AoZIdFNQwINdkj4pM99hApxGtd~AjYC2YO1zrBTDVCJSPhbr6V3PNlMJHPpi3hmATEwwInfO8KSH6C7f47NrbAmYZG6ee5dIIhlZ0lIQFSgKlNsrReckPXr0UhoRq~n2iuKRI2cxF~2YkAVqLeSGMaH4q3LOmr4IveDyz-ckk0f9dQmwkyNvcN6YfHw__"
            alt="photo"
          />
          <span className="text-Body1 mt-6 text-Blue-500 lg:text-Body1 lg:font-semibold lg:mt-1">
            Max Mayfield
          </span>
        </div>

        <div className="flex gap-3 justyfy-center items-center">
          <div className="bg-Gray-300 text-Gray-800 px-4 py-2 rounded-lg text-Body4 lg:h-[134px] lg:w-[143px] lg:text-Body2 relative ">
            Course Inprogress{" "}
            <span className="font-semibold text-Body1 lg:absolute lg:bottom-4 lg:left-4">
              3
            </span>
          </div>
          <div className="bg-Gray-300 text-Gray-800 px-4 py-2 rounded-lg text-Body4 lg:h-[134px] lg:w-[143px] lg:text-Body2 relative">
            Course Completed{" "}
            <span className="font-semibold text-Body1 lg:absolute lg:bottom-4 lg:left-4">
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
