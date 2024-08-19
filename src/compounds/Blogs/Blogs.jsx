import Header from "../Header/Header";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="circle py-20">
      <div className="container mx-auto">
        <Header
          title="Our Latest Blog"
          para="We provide digital experience services to startups and small businesses."
          style="mx-auto"
          align="text-center"
        />
        <div className="md:flex justify-center items-center mt-16 gap-x-10">
          <BlogCard
            image="./images/blogOne.jpg"
            title="How to Be Ahead of Stock Changes"
            author="John"
            comments="5"
          />
          <BlogCard
            image="./images/blogTwo.jpg"
            title="Online Reputation And Management"
            author="Amin"
            comments="10"
          />
          <BlogCard
            image="./images/blogThree.jpg"
            title="Tips To Move Your Project More Forward"
            author="Insider"
            comments="15"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
