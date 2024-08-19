import results from "../../assets/results.png";
import socialMarketing from "../../assets/social-marketing.png";
import socialMedia from "../../assets/social-media.png";
import Header from "../Header/Header";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-full h-auto circle py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <Header
          title="Our Services"
          para="We have been providing great flooring solutions service."
          style="mx-auto"
          align="text-center"
        />
        <div className="pt-10 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <ServiceCard
            symbol={results}
            title="Marketing Strategy"
            para="Social Media has changed the way we interact & do business while
        creating"
            style="bg-[#EBF7E9]"
          />
          <ServiceCard
            symbol={socialMedia}
            title="Social Marketing"
            para="Social Media has changed the way we interact & do business while creating a new avenue."
            style="bg-[#D8EAFF]"
          />
          <ServiceCard
            symbol={socialMarketing}
            title="Content Marketing"
            para="Content Marketing is the other fold of online advertisement. If you are looking to build"
            style="bg-[#FBF1EC]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
