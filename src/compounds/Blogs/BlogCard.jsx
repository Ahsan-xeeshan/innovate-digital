/* eslint-disable react/prop-types */
const BlogCard = ({ image, title, author, comments }) => {
  return (
    <div className="shadow-md bg-white rounded-3xl mt-10 mx-5 md:mx-0 lg:mt-0">
      <div className="lg:w-[369px] h-[240px] ">
        <img src={image} alt="" className="w-full h-full rounded-t-3xl" />
      </div>
      <div className="p-5">
        <h3 className="font-open text-2xl font-medium lg:w-[250px]">{title}</h3>
        <p className="text-lg text-[#474747] py-5">
          By {author}- <span>{comments}</span> Comments
        </p>
        <button className="relative group font-open text-lg font-bold py-2 px-4 bg-transparent border-none rounded-full text-current overflow-hidden transition-all duration-500">
          Read More
          <span className="absolute top-0 left-0 w-[40%] h-full bg-btnColor bg-opacity-25 transition-all duration-500 rounded-full group-hover:w-full group-hover:rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
