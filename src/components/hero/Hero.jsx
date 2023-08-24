import HeroImg from "@/assets/hero.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../Layout";

const Hero = () => {
  return (
    <Layout className="flex md:flex-row flex-col py-24">
      <div className="flex flex-1 flex-col gap-4 justify-start">
        <p className="md:text-2xl text-lg uppercase text-sky-600 font-medium">
          la voie du succès
        </p>
        <h1 className="md:text-5xl text-3xl font-semibold py-4 md:py-2">
          Accéder à plus de <span className="text-sky-600">1000</span> cours en
          ligne proposés par plus de <span className="text-sky-600">200</span>{" "}
          formateurs et institutions
        </h1>
        <p className="text-lg text-gray-900 py-2">
          Obtenez les meilleurs cours du marché, sur tous les sujets
          imaginables.
        </p>
        <form className="bg-white p-4 drop-shadow-md rounded-md flex justify-between md:max-w-[690px] max-w-full">
          <input
            className="bg-sky-100/10 w-full outline-none"
            type="text"
            placeholder="Qu'aimeriez-vous apprendre aujourd'hui ?"
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <img
        src={HeroImg}
        alt="Image by pch.vector on Freepik"
        className="md:mt-20 -mt-16 mb-10 md:mb-0 order-first md:order-last"
      />
    </Layout>
  );
};

export default Hero;
