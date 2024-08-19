/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "../Header/Header";

const SampleNextArrow = ({ onClick }) => (
  <button
    className="w-12 h-12 md:w-[60px] md:h-[60px] hidden md:block rounded-full bg-[#f3dbce] hover:bg-btnColor text-center absolute md:left-[-320px] lg:left-[-530px] bottom-[-10px] md:bottom-0"
    onClick={onClick}
  >
    <FaChevronRight className="text-white mx-auto my-3 md:my-5 text-xl font-semibold" />
  </button>
);

const SamplePrevArrow = ({ onClick }) => (
  <button
    className="w-12 h-12 md:w-[60px] md:h-[60px] hidden md:block rounded-full bg-[#f3dbce] hover:bg-btnColor text-center absolute left-[-100px] md:left-[-390px] lg:left-[-620px] bottom-[-10px] md:bottom-0"
    onClick={onClick}
  >
    <FaChevronLeft className="text-white mx-auto my-3 md:my-5 text-xl font-semibold" />
  </button>
);

const Review = () => {
  const review_data = [
    {
      id: 1,
      image: "./images/a6.jpg",
      name: "John Doe",
      designation: "Fashion Designer",
      review:
        "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. ",
    },
    {
      id: 2,
      image: "./images/a6.jpg",
      name: "Lana Wright",
      designation: "Interior Designer",
      review:
        "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. ",
    },
    {
      id: 3,
      image: "./images/a6.jpg",
      name: "Lankin Jackson",
      designation: "SEO Specialist",
      review:
        "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. ",
    },
    {
      id: 4,
      image: "./images/a6.jpg",
      name: "Emily Hacks",
      designation: "Writer",
      review:
        "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. ",
    },
    {
      id: 5,
      image: "./images/a6.jpg",
      name: "Karl Mathew",
      designation: "Social Influencer",
      review:
        "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. ",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="circle">
      <div className="container mx-auto py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <Header
              title="Client Review"
              para="People use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient."
              style="mx-auto md:mx-0"
            />
          </div>
          <div className="w-full md:w-2/3 lg:px-24">
            <Slider {...settings}>
              {review_data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-lg p-4 lg:p-10 rounded-[20px] w-full md:w-[340px] lg:w-[370px]"
                >
                  <div>
                    <p className="font-paprika text-sm lg:text-lg text-[#6C7D93] w-full md:w-[200px] lg:w-[270px]">
                      {item.review}
                    </p>
                    <div className="flex justify-between items-center mt-5 gap-2 md:gap-5">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[30px] md:w-[60px] h-[30px] md:h-[60px] lg:w-[94px] lg:h-[94px] rounded-full"
                        />
                        <img
                          src="./images/quote.png"
                          alt="quote"
                          className="absolute bottom-0 right-0"
                        />
                      </div>
                      <div>
                        <h5 className="font-open font-semibold text-sm md:text-base lg:text-2xl">
                          {item.name}
                        </h5>
                        <p className="font-open text-sm lg:text-lg">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
