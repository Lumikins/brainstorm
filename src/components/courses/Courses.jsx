import { courses } from "@/data/courses";
import React from "react";
import Slider from "react-slick";
import Layout from "../Layout";
import CoursesCard from "./CoursesCard";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <Layout className="px-10">
      <h1 className="text-center text-2xl py-3 font-bold uppercase">
        Nos cours <span className="text-sky-600">les plus populaires</span>
      </h1>
      <p className="text-gray-900 text-center md:text-xl pb-10">
        Choisissez parmi les meilleurs cours proposés sur le web :
      </p>
      <Slider {...settings}>
        {courses.map((course) => (
          <CoursesCard course={course} key={course.id} />
        ))}
      </Slider>
    </Layout>
  );
};

export default Courses;
