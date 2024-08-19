/* eslint-disable react/prop-types */

const ServiceCard = ({ title, para, symbol, style }) => {
  return (
    <div
      className={`w-[320px] md:w-[370px] h-[395px] ${style} rounded-[20px] p-10 text-center shadow-md`}
    >
      <img src={symbol} alt="" className="mx-auto" />
      <h4 className="font-open font-semibold text-2xl md:text-[30px] capitalize py-5">
        {title}
      </h4>
      <p className="font-paprika text-base md:text-lg text-[#6C7D93] md:w-[312px] mx-auto pb-6">
        {para}
      </p>
      <div>
        <button className="relative group font-open text-lg font-bold py-2 px-3 bg-transparent border-none rounded-full text-current overflow-hidden transition-all duration-500">
          Read More
          <span className="absolute top-0 left-0 w-[40%] h-full bg-btnColor bg-opacity-25 transition-all duration-500 rounded-full group-hover:w-full group-hover:rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
