import {
  faArrowRightLong,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TestimonialsCard = ({ testimony }) => {
  return (
    <div className="bg-white p-3 md:p-8 rounded-3xl shadow-lg drop-shadow-lg my-8 mx-5 h-[340px] md:h-[400px]">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src={testimony.imgLink}
            className="rounded-full h-[100px] w-[100px] md:h-[120px] md:w-[120px]"
          />
          <div className="flex flex-col justify-center font-semibold gap-2 md:gap-0">
            <h1 className="md:text-2xl text-lg leading-none md:leading-loose">{testimony.name}</h1>
            <p className="md:text-xl text-sm">{testimony.role}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faQuoteRight} className="h-7 md:h-14" />
      </div>
      <div className="bg-white p-2 md:p-3 flex items-center justify-between">
        <p className="md:text-lg text-justify line-clamp-6">{testimony.desc} </p>
      </div>
      <div className="flex bg-sky-600/30 border-transparent border-2 hover:border-sky-800 hover:text-slate-50 hover:cursor-pointer rounded-md p-2 w-fit items-center float-right mr-2 mt-2 md:mt-0">
        <p className="font-semibold text-sm uppercase">Lire la suite</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
