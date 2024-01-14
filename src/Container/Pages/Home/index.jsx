import React from "react";
import HeroSection from "../../Components/herosection";
import BlogCategory from "../../Components/blogcategory";
import BlogServices from "../../Components/blogservices";
import { useGlobalContext } from "../../context";
import { Navigate } from "react-router-dom";
import GetStarted from "../../Components/GetStarted";
import AboutBlog from "../../Components/AboutBlog";
import Testimonial from "../../Components/Testimonial";
const Home = () => {
  const { user } = useGlobalContext();
  if (user?.name === "super admin") {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="homeWrapper">
      {user ? <GetStarted /> : <HeroSection />}
      {!user && <AboutBlog />}
      <BlogCategory />
      <BlogServices />
      <Testimonial />
    </div>
  );
};

export default Home;
