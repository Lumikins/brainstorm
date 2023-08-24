import { testimonials } from "@/data/testimonials";
import React from "react";
import Slider from "react-slick";
import Layout from "../Layout";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout className="md:px-10 px-5 md:px-4">
      <h1 className="text-center text-2xl py-3 font-bold uppercase">
        Nos <span className="text-sky-600">étudiants </span>témoignent
      </h1>
      <p className="text-gray-900 text-center md:text-xl md:pb-10 pb-4">
        Voici ce que nos étudiants disent de BrainStorm :
      </p>
      <Slider {...settings}>
        {testimonials.map((testimony) => (
          <TestimonialsCard testimony={testimony} key={testimony.id} />
        ))}
      </Slider>
    </Layout>
  );
};

export default Testimonials;
