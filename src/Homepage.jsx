import Categories from "./utilities/Categories";
import Experience from "./utilities/Experience";
import Explore from "./utilities/Explore";
import Footer from "./utilities/Footer";
import Hero from "./utilities/Hero";
import Latest from "./utilities/Latest";
import Nav from "./utilities/Nav";

function Homepage() {
  return (
    <div>
      <div className="hero-navbg">
        <Nav />
        <Hero />
      </div>
      <Categories />
      <Experience />
      <div className="latest-bg">
        <Latest />
      </div>
      <Explore />
      <Footer />
    </div>
  );
}

export default Homepage;
