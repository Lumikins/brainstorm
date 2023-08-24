import Categories from "@/components/categories/Categories";
import Companies from "@/components/companies/Companies";
import Courses from "@/components/courses/Courses";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Stats from "@/components/stats/Stats";
import Testimonials from "@/components/testimonials/Testimonials";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const message = () =>
    toast(
      "Site web créé uniquement à des fins de présentation - certains éléments peuvent ne pas fonctionner.\n\nCe service n'existe pas et les entreprises mentionnées sur ce site ne sont pas affiliées au développeur.",
      {
        duration: 10000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
      }
    );

  useEffect(() => {
    setTimeout(() => {
      message();
    }, 2000);
  }, []);
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Stats />
      <Categories />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
