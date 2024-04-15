import React from "react";

function ProgramCard({ discription, icon, title }) {
  return (
    <div className="flex w-[400px] h-[400px]  justify-center items-center hover:scale-105 hover:bg-gradient-to-b from-[#014f86] via-bg-cyan-900 via-bg-cyan-900 via-bg-cyan-900 to-black hover:rounded-lg" data-aos='fade-right'
    data-aos-duration='2000'
    data-aos-offset="200"
     >
      <div className="w-[360px] h-[340px]  relative rounded-sm  opacity-20 blur-xl bg-cyan-400"></div>
      <div className="absolute w-80 h-64 flex pb-6 flex-col gap-4 hover:scale-110" data-aos='zoom-in'
    data-aos-duration='1500'
    data-aos-delay="300">
        <h1 className="w-10 h-10  fill-white ">{icon}</h1>
        <h3 className="font-semibold">{title}</h3>
        <p className="font-thin">{discription}</p>
        <h6 className="flex gap-4 justify-start items-center">
          Join Now{" "}
          <svg
            className="w-10 h-10  fill-white "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </h6>
      </div>
    </div>
  );
}

export default ProgramCard;
