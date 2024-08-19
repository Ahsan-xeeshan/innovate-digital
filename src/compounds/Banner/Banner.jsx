import BannerBox from "./BannerBox";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div className="w-full h-[500px] md:h-[650px] lg:h-[850px] circle -z-40">
      <BannerContent />
      <BannerBox />
    </div>
  );
};

export default Banner;
