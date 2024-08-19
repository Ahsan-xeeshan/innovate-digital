/* eslint-disable react/prop-types */
const ProcessCard = ({ step, title, para, style }) => {
  return (
    <div className={`lg:w-[465px] p-4 md:p-6 lg:p-8 rounded-[20px] ${style}`}>
      <span className="relative group font-open text-lg font-bold py-2 px-3 bg-transparent border-none rounded-full text-current overflow-hidden transition-all duration-500">
        {step}
        <span className="absolute top-0 left-0 w-[40%] h-full bg-btnColor bg-opacity-25 transition-all duration-500 rounded-full group-hover:w-full group-hover:rounded-full"></span>
      </span>
      <h3 className="font-open font-semibold text-xl md:text-[30px] py-5">
        {title}
      </h3>
      <p className="font-open text-lg text-[#6C7D93]">{para}</p>
    </div>
  );
};

export default ProcessCard;
