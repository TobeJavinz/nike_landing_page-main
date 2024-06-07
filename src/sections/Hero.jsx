import { statistics } from "../constants";
import { Button } from "../components";

import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full xl:flex-row justify-center items-center text-center min-h-screen max-container pt-28"
    >
      <h1 className="mt-24 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          Merryl's Consumers{" "}
          <span className="text-blue-900 inline-block mt-3">Good</span> Trading
        </span>
      </h1>


   
      <p className="ml-80 max-sm:ml-0 mb-20 font-poppins xl:whitespace-nowrap relative z-10 text-slate-gray text-lg max-sm:text-[18px] max-sm:leading-[24px] mt-6 sm:max-w-sm">
        For Merryl's Consumers: Unveil Quality, Convenience, and Innovation in
        Every Purchase
      </p>

      <div className="flex flex-wrap w-full mt-20 gap-16 items-center justify-center text-center">
      <Button label="Get Started" iconURL={arrowRight} />
      </div>
  

      <div className="flex flex-wrap w-full mt-20 gap-16 items-center justify-center text-center">
        {statistics.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
