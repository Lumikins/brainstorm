import CtaImg from "@/assets/cta.jpg";
import React from "react";
import Layout from "../Layout";

const Cta = () => {
  return (
    <Layout className="flex md:flex-row flex-col py-24 md:pt-5 md:pb-20 items-center">
      <img
        src={CtaImg}
        alt="Photo by Annie Spratt on Unsplash"
        className="md:mt-20 mb-10 md:mb-0 w-[650px] mx-auto md:rounded-3xl"
      />
      <div className="flex flex-col gap-4 md:w-[650px] text-center md:text-left mx-auto">
        <h1 className="text-2xl font-bold py-4 md:py-2 uppercase">
          Rejoignez dès aujourd&apos;hui la{" "}
          <span className="text-sky-600">
            plus grande plateforme de cours en ligne{" "}
          </span>{" "}
          du monde
        </h1>
        <p className="text-lg md:text-xl text-gray-900 py-2">
          Inscrivez-vous gratuitement aujourd&apos;hui et commencez votre voyage{" "}
        </p>
        <button className="px-8 py-3 rounded-md bg-emerald-600 hover:bg-white text-white hover:text-emerald-600 border border-transparent hover:border-emerald-600 font-bold md:w-fit w-[350px] ml-6 md:ml-0">
          Inscription gratuite
        </button>
      </div>
    </Layout>
  );
};

export default Cta;
