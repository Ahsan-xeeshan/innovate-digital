import Logo from "../../assets/Logo.png";
import Copyright from "./Copyright";
const Footer = () => {
  return (
    <div className="circle py-20">
      <div className="container mx-auto">
        <div className="md:flex pl-5 md:pl-10 lg:pl-0 flex-wrap">
          <div className="md:w-1/2 lg:w-2/5">
            <img src={Logo} alt="" />
            <p className="font-open text-xl text-[#6C7D93] lg:w-[490px] capitalize py-10">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10 lg:pl-0 lg:w-1/5">
            <h3 className="font-open text-2xl font-semibold">Features</h3>
            <ul className="mt-8 font-open text-xl text-[#6C7D93] font-semibold">
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Home</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">About</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Benefit</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 lg:w-1/5">
            <h3 className="font-open text-2xl font-semibold">Products</h3>
            <ul className="mt-8 font-open text-xl text-[#6C7D93] font-semibold">
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Task Management</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Company growth</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Time tracking</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-10 lg:pl-0 lg:w-1/5">
            <h3 className="font-open text-2xl font-semibold">Support</h3>
            <ul className="mt-8 font-open text-xl text-[#6C7D93] font-semibold">
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Customer Service</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Accessibility</a>
              </li>
              <li className="mb-8 hover:ml-2 transition-all duration-500">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
