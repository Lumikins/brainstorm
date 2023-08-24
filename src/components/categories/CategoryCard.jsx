import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../Layout";

const CategoryCard = ({ category }) => {
  return (
    <Layout>
      <div className="bg-white py-2 px-1 md:p-3 shadow-black drop-shadow-md rounded-md flex items-center justify-between border-transparent border-2 hover:border-sky-600/30 hover:cursor-pointer group category-card">
        <div className="flex items-center gap-2 md:gap-4">
          <FontAwesomeIcon icon={category.icon} size="sm" className="md:text-lg" />
          <h1 className="md:text-xl font-semibold">{category.title}</h1>
        </div>
        <div className="group-hover:bg-sky-600/30 rounded-md py-2 px-3">
          <FontAwesomeIcon
            icon={faArrowRightLong}
            style={{ color: "#0284c7", opacity: 0.6 }}
            size="lg"
            className="icon"
          />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryCard;
