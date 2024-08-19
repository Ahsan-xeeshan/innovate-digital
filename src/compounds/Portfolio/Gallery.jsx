/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../Header/Header";

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      title: "Digital Mkt",
      image: "./images/a1.jpg",
    },
    {
      id: 2,
      title: "Branding",
      image: "./images/a2.jpg",
    },
    {
      id: 3,
      title: "Content Mkt",
      image: "./images/a3.jpg",
    },
    {
      id: 4,
      title: "Social Media Mkt",
      image: "./images/a4.jpg",
    },
    {
      id: 5,
      title: "Branding",
      image: "./images/a5.jpg",
    },
    {
      id: 6,
      title: "Digital Mkt",
      image: "./images/a6.jpg",
    },
    {
      id: 7,
      title: "Content Mkt",
      image: "./images/a7.jpg",
    },
    {
      id: 8,
      title: "Social Media Mkt",
      image: "./images/a8.jpg",
    },
    {
      id: 9,
      title: "Content Mkt",
      image: "./images/a9.jpg",
    },
  ];
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setData(galleryData);
    setCollection([...new Set(galleryData.map((item) => item.title))]);
  }, []);

  const filter_data = (itemData) => {
    const filterData = galleryData.filter((item) => item.title == itemData);
    setData(filterData);
    setActiveTab(itemData);
  };

  return (
    <div className="circle h-auto">
      <div className="container mx-auto pt-9">
        <Header title="Work Showcase" align="text-center" style="mx-auto" />
        <div className="mt-16">
          <ul className="flex flex-wrap mx-3 md:0 gap-4 md:gap-10 text-xl md:text-2xl mb-5 font-open text-[#6C7D93] font-semibold pb-10 overflow-x-auto">
            <li>
              <button
                className={`hover:text-btnColor transition-all duration-300 ${
                  activeTab === "All" ? "text-btnColor" : "text-[#6C7D93]"
                }`}
                onClick={() => setData(galleryData)}
              >
                All
              </button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  className={`hover:text-btnColor transition-all duration-300 ${
                    activeTab === item ? "text-btnColor" : "text-[#6C7D93]"
                  }`}
                  onClick={() => filter_data(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 mx-5 md:mx-0">
          {data.map((item) => (
            <div key={item.id} className="m-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-[244px] w-[345px] rounded-[20px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
