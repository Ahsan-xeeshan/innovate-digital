/* eslint-disable react/prop-types */
const PrimaryBtn = ({ children }) => {
  return (
    <button className="rounded-3xl xl:static bg-btnColor md:static text-white font-semibold border-[1px] md:border-[2px] border-white bg-primary py-1 md:py-3 px-5 md:px-8 hover:bg-white hover:text-btnColor active:bg-red-700 hover:border-btnColor duration-500">
      {children}
    </button>
  );
};

export default PrimaryBtn;
