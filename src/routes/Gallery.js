import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Gallery"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Gallery;
