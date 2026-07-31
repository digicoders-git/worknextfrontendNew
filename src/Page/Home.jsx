import React from "react";
import Home_heading from "../Component/Home_heading";
import TestimonialCarousel from "../Component/Home_TestimonialCarousel";
import Footer from "../Component/Footer";
import Services from "../Component/Services";
import TransformBussnation from "../Component/TransformBussnation";
import ProjectSection from "../Component/ProjectRe";
import FeaturedProjects from "../Component/FeaturedProjects";
import LogoSlider from "../Component/LogoSlider";

function Home() {
  return (
    <>
      <Home_heading />
      <Services />
      <FeaturedProjects />
      <TransformBussnation />

      <TestimonialCarousel />
      <LogoSlider />
      <Footer />
    </>
  );
}

export default Home;
