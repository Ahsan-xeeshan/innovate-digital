import About from "./compounds/About/About";
import Banner from "./compounds/Banner/Banner";
import Blogs from "./compounds/Blogs/Blogs";
import Footer from "./compounds/Footer/Footer";
import Navbar from "./compounds/Navbar/Navbar";
import Gallery from "./compounds/Portfolio/Gallery";
import Process from "./compounds/Process/Process";
import Review from "./compounds/Review/Review";
import Services from "./compounds/Services/Services";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Services />
        <About />
        <Gallery />
        <Process />
        <Review />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default App;
