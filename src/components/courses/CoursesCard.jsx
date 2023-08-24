import React from "react";
import StarRating from "./StarRating";

const CoursesCard = ({ course }) => {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mx-2 my-2 hover:cursor-pointer">
      <img
        src={course.linkImg}
        className="h-40 md:h-64 w-full object-none md:object-cover hover:scale-110 transition-all hover:duration-500"
      />
      <div className="p-5 border-b">
        <h1 className="py-2 text-lg truncate">{course.title}</h1>
        <div className="flex">
          <StarRating rating={course.rating} />
          <p className="ml-2">({course.reviews})</p>
        </div>
      </div>
      <h3 className="p-5 text-xl">&euro;{course.price}</h3>
      <div className="uppercase absolute top-0 bg-black text-white m-3 px-2 py-[2.5px] rounded font-bold">
        {course.category}
      </div>
    </div>
  );
};

export default CoursesCard;
