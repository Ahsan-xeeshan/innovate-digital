import boxOne from "../../assets/boxOne.png";
import boxTwo from "../../assets/boxTwo.png";
import comFive from "../../assets/ComFive.png";
import comFour from "../../assets/ComFour.png";
import comOne from "../../assets/ComOne.png";
import comSix from "../../assets/ComSix.png";
import comThree from "../../assets/ComThree.png";
import comTwo from "../../assets/ComTwo.png";
import dots from "../../assets/dots.png";
import remark from "../../assets/remark.png";
const About = () => {
  return (
    <div className="w-full lg:h-[780px] circle py-16 bg-gray-100 pt-12 lg:pt-[100px]">
      <div className="container mx-auto px-4 md:px-0 flex">
        <div className="w-1/2 hidden lg:block h-full relative">
          <img src={dots} alt="" className="my-[190px] h-[175px]" />
          <div className="absolute top-8 left-16">
            <img src={boxTwo} alt="" />
          </div>
          <div className="absolute bottom-0 left-0">
            <img src={boxOne} alt="" className="w-[296px] h-[280px]" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full text-center lg:text-start">
          <div className="lg:pl-8">
            <img src={remark} alt="" className="mt-10 mx-auto lg:mx-0" />
            <h3 className="font-open font-extrabold text-5xl py-8 ">
              Who We Are
            </h3>
            <p className="font-paprika w-auto lg:w-[440px] text-lg text-[#6C7D93]">
              We are a Dhaka based Digital Communication Agency committed to
              creating an actionable strategy, online marketing & technology
              solution for our partners. As a multidisciplinary company, we
              operate as a unified,{" "}
            </p>
            <p className="font-paprika text-xs text-[#6C7D93] py-3">
              Join the 10.000+ Companys Trusting{" "}
            </p>
          </div>
          <div className="flex w-full lg:w-[452px] flex-wrap gap-y-2 mx-16 md:mx-0">
            <img src={comOne} alt="" />
            <img src={comTwo} alt="" />
            <img src={comThree} alt="" />
            <img src={comFour} alt="" />
            <img src={comFive} alt="" />
            <img src={comSix} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
