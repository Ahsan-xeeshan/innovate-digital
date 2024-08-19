/* eslint-disable react/prop-types */
import remark from "../../assets/remark.png";
const Header = ({ title, para, style, align }) => {
  return (
    <div className={`${align}`}>
      {" "}
      <img
        src={remark}
        alt="Digital Marketing Remark"
        className={`w-[80px] md:w-[100px] lg:w-[120px] ${style}`}
      />
      <h3 className="font-extrabold text-[48px] font-open my-3">{title}</h3>
      <p
        className={`font-paprika text-[#6C7D93] text-lg md:w-[250px] lg:w-[332px] ${style}`}
      >
        {para}
      </p>
    </div>
  );
};

export default Header;
