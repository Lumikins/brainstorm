import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((index) => (
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#e4e41b" }}
          key={index}
        />
      ))}
      {[...Array(5 - rating)].map((index) => (
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#c0c0c0" }}
          key={index}
        />
      ))}
    </div>
  );
};

export default StarRating;
