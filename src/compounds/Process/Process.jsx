import Header from "../Header/Header";
import ProcessCard from "./ProcessCard";

const Process = () => {
  return (
    <div className="circle py-12">
      <Header
        title="Our creative process"
        para="We provide digital experience services to startups and small businesses."
        style="mx-auto"
        align="text-center"
      />
      <div className="container mx-auto py-20">
        <div className="flex gap-2">
          <div className="w-full md:w-1/2 my-auto">
            <ProcessCard
              step="Step-1"
              title=" Global SEO Research"
              para="Practical tools and features make it easier to build and manage your
        site."
              style="bg-[#EBF7E9]"
            />
          </div>
          <div className="w-1/2 hidden md:block">
            <img
              src={"./images/a7.jpg"}
              alt=""
              className="w-full h-[324px] rounded-3xl"
            />
          </div>
        </div>
        <div className="flex gap-2 my-5">
          <div className="w-1/2 hidden md:block">
            <img
              src={"./images/a3.jpg"}
              alt=""
              className="w-full h-[324px] rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 my-auto md:flex justify-end">
            <ProcessCard
              step="Step-2"
              title="Social media integration"
              para="Practical tools and features make it easier to build and manage your
        site."
              style="bg-[#D8EAFF]"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full md:w-1/2 my-auto">
            <ProcessCard
              step="Step-3"
              title="Launching the Application"
              para="Practical tools and features make it easier to build and manage your
        site."
              style="bg-[#FBF1EC]"
            />
          </div>
          <div className="w-1/2 hidden md:block">
            <img
              src={"./images/a8.jpg"}
              alt=""
              className="w-full h-[324px] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
