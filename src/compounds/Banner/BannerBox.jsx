import boxOne from "../../assets/boxOne.png";
import boxTwo from "../../assets/boxTwo.png";
import facebook from "../../assets/facebook.png";
import groupVector from "../../assets/groupVector.png";
import groupVector2 from "../../assets/groupVector2.png";
import instagram from "../../assets/instagram.png";
import marketing from "../../assets/marketing.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";

const BannerBox = () => {
  return (
    <div className="relative h-full z-10">
      <div className="absolute hidden xl:block right-[16%] top-[22rem] w-[400px] h-[370px]">
        <img src={boxOne} alt="" />
      </div>
      <div className="absolute hidden xl:block right-[2%] top-[10rem] w-[460px] h-[430px] z-[-1]">
        <img src={boxTwo} alt="" className="w-full h-full" />
      </div>
      <div className="absolute hidden xl:block right-0 top-10 z-[-2]">
        <img src={groupVector} alt="" />
      </div>
      <div className="absolute left-[-2rem] top-0 h-[400px]">
        <img src={groupVector2} alt="" className="h-full" />
      </div>
      <div className="absolute top-[5rem] -left-5 h-[200px]">
        <img src={marketing} alt="" className="h-full" />
      </div>
      <img
        src={facebook}
        alt=""
        className="absolute hidden xl:block right-[30%] top-48"
      />
      <img
        src={twitter}
        alt=""
        className="absolute hidden xl:block left-16 bottom-7"
      />
      <img
        src={whatsapp}
        alt=""
        className="absolute hidden xl:block right-16 bottom-4"
      />
      <img
        src={instagram}
        alt=""
        className="absolute hidden xl:block bottom-48 right-[40%]"
      />
    </div>
  );
};

export default BannerBox;
