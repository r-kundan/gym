import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import BMI from "./BMI";
import ProgramCard from "./ProgramCard";
import JourneyCard from "./JourneyCard";

function Home() {
  return (
    <div className=" text-white p-3 flex  flex-col gap-8 md:gap-14  bg-black">
      <div className=" tracking-widest flex justify-center items-center p-8">
        <h1
          className="text-4xl font-bold text-[#edf2fb]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-[#3aafb9] to-blue-600 "  data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300">
            SHAPE
          </span>{" "}
          YOUR IDEAL BODY
        </h1>
      </div>
      <div className="flex p-4 m-8 pb-8 lg:gap-12 gap-24 flex-col justify-center items-center lg:flex-row " >
        <div className="text-[#e2eafc] p-4 w-96 md:w-[600px] mb-4 pb-4" >
          <div data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay='200'>
            <TypeAnimation
              className="border-b border-[#3aafb9] shadow-lg"
              sequence={[
                "Track Your Goal…",
                2000,
                " Get Burn Fat…",
                2000,
                "Be Fit…",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ color: "#3aafb9", fontWeight: 800, fontSize: "30px" }}
            />
          </div>
          <p data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay='200'>
            Don’t worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals. Let’s keep burning to
            achieve your goals, it hurts only temporarily, if you give up now
            you will be in pain forever.
          </p>
        </div>
        <div className="flex" >
          <section className="translate-x-32 hidden md:block hover:z-20"
       
          >
            <div className=" shadow-innerShadow border-[30px]  flex justify-center items-center w-80 h-80 border-[#014f86] rounded-full">
              <div className="shadow-innerShadow border-[24px] w-62 h-62 border-[#2c7da0b7] rounded-full ">
                <div className="shadow-innerShadow border-[16px] border-[#89c2d9d5] rounded-full w-60 h-60">
                  <div>
                    <img
                      className="shadow-innerShadow rounded-full w-52 h-52"
                      src="https://source.unsplash.com/wXBK9JrM0iU"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="z-10" data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay='100'>
            <div className=" shadow-innerShadow border-[30px]  flex justify-center items-center w-80 h-80 border-[#014f86] rounded-full">
              <div className="shadow-innerShadow border-[24px] w-62 h-62 border-[#2c7da0b7] rounded-full ">
                <div className="shadow-innerShadow border-[16px] border-[#89c2d9d5] rounded-full w-60 h-60">
                  <div>
                    <img
                      className="shadow-innerShadow rounded-full w-52 h-52"
                      src="https://source.unsplash.com/f4RBYsY2hxA"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="translate-x-[-8rem] hidden md:block hover:z-20"  >
            <div className=" shadow-innerShadow border-[30px]  flex justify-center items-center w-80 h-80 border-[#014f86] rounded-full">
              <div className="shadow-innerShadow border-[24px] w-62 h-62 border-[#2c7da0b7] rounded-full ">
                <div className="shadow-innerShadow border-[16px] border-[#89c2d9d5] rounded-full w-60 h-60">
                  <div>
                    <img
                      className="shadow-innerShadow rounded-full w-52 h-52"
                      src="https://source.unsplash.com/xB4ExGcUai0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-col shadow-innerShadow items-center  self-center  m-4 p-2 rounded-md w-80 md:w-96" data-aos='fade-left'
    data-aos-duration='2000'
    data-aos-delay="400">
        <h1 className="text-white text-3xl font-extrabold" data-aos='fade-right'
    data-aos-duration='2000'
    data-aos-delay="800">BMI Calculator</h1>
        <Link to="/bmi">
          <button data-aos='fade-right'
    data-aos-duration='2000'
    data-aos-delay="800"
            type="button"
            className="bg-white border-none rounded-full font-bold cursor-pointer text-xl outline-none p-2  w-40 text-black m-4"
          >
            Click Here
          </button>
        </Link>
      </div>

      <div className="flex justify-center flex-col items-center m-6">
        <h1 className="text-4xl font-extrabold text-pretty border-t-2 border-b-2 p-2 text-teal-600" data-aos='fade-up' data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
          EXPLORE OUR{" "}
          <span className="text-white ">&nbsp; &nbsp;PROGRAMS&nbsp;&nbsp;</span>{" "}
          TO SHAPE YOUR BODY
        </h1>
        <div className="flex flex-wrap m-8 justify-center items-center gap-8">
          <ProgramCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
              </svg>
            }
            title={"Strength Training"}
            discription={
              "In this program, you are trained to improve your strength through."
            }
          />
          <ProgramCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />
              </svg>
            }
            title={"Cardio Training"}
            discription={
              "In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
            }
          />
          <ProgramCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
              </svg>
            }
            title={"Fat Burning"}
            discription={
              "This program is suitable for you who wants to get rid of your fat and lose their weight."
            }
          />
          <ProgramCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z" />
              </svg>
            }
            title={"Health Fitness"}
            discription={
              "This programs is designed for those who exercises only for their body fitness not body building."
            }
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center m-6 gap-12">
        <h1 className="text-4xl font-extrabold text-pretty border-t-2 border-b-2 p-2 text-teal-600" data-aos='fade-up' data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
          READY TO START{" "}
          <span className="text-white ">
            &nbsp; &nbsp;YOUR JUOURNEY&nbsp;&nbsp;
          </span>{" "}
          NOW WITH US
        </h1>
        <div className="flex flex-wrap m-8 justify-center items-center gap-8">
          <JourneyCard
            plan={"$20"}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
              </svg>
            }
            title={"BASIC PLAN"}
            list1={"2 hours of exerxises"}
            list2={"Free consultaion to coaches"}
            list3={"Access to the Community"}
          />
          <JourneyCard
            plan={"$20"}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
              </svg>
            }
            title={"PREMIUM PLAN"}
            list1={"5 hours of exerxises"}
            list2={"Free consultaion to coaches"}
            list3={"Accessto minibar"}
          />
          <JourneyCard
            plan={"$20"}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
              </svg>
            }
            title={"PRO PLAN"}
            list1={"8 hours of exerxises"}
            list2={"consultaion to Private coache"}
            list3={"Free Fitness Merchandises"}
          />
        </div>
      </div>
      <hr />
      <div className="flex gap-4 flex-col md:flex-row justify-evenly p-8">
        <div className=" tracking-widest flex justify-center items-center " data-aos='fade-left'
        data-aos-duration='1000'>
          <h1 className="text-4xl font-bold text-[#edf2fb]">
            {" "}
            READY TO{" "}
            <span className="text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-[#3aafb9] to-blue-600 ">
              LEVEL UP YOUR BODY
            </span>{" "}
            WITH US ?
          </h1>
        </div>

        <Link data-aos='fade-right'
        data-aos-duration='1000'
          to="/register"
          className="bg-blue-600 p-2 flex font-extrabold w-72 justify-center rounded-md text-2xl"
        >
          <button type="button" className="">
            Register Here
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
