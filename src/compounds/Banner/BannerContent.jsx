import remark from "../../assets/remark.png";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const BannerContent = () => {
  return (
    <div className="absolute top-[20%] left-0 w-full z-20">
      <div className="container mx-auto px-4">
        <img
          src={remark}
          alt="Digital Marketing Remark"
          className="w-[80px] md:w-[100px] lg:w-[120px] mx-auto lg:mx-0"
        />
        <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl w-full md:w-[686px] font-open my-4 md:my-8 mx-auto lg:mx-0 text-center lg:text-left">
          We Are Digital <span className="text-btnColor">Marketing</span> Agency
        </h3>
        <p className="font-paprika text-base sm:text-lg md:text-xl w-full md:w-[571px] text-[#6C7D93] mb-4 md:mb-8 text-center lg:text-left mx-auto lg:mx-0">
          Use customer data to build great and solid product experiences that
          convert. Digital marketing’s development has changed the way brands
          and businesses use technology for marketing.
        </p>
        <div className="flex justify-center lg:justify-start">
          <PrimaryBtn>Get Free Quote</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
