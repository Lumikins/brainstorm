import StatsImg from "@/assets/stats.jpg";
import {
  faBuilding,
  faChalkboardTeacher,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../Layout";

const Stats = () => {
  return (
    <Layout className="flex md:flex-row flex-col pt-24 pb-10 md:py-24">
      <div className="flex flex-col items-center md:items-start justify-center">
        <h1 className="text-2xl font-bold leading-loose uppercase">
          Notre <span className="text-sky-600">histoire de réussite</span>
        </h1>
        <p className="md:text-xl text-gray-900">
          Voici quelques statistiques sur nos réalisations :
        </p>
        <div className="grid grid-cols-2 md:w-[600px] w-full py-10">
          <div className="py-6 flex items-center">
            <div className="p-4 bg-sky-600/30 rounded-lg">
              <FontAwesomeIcon
                icon={faUsers}
                size={"xl"}
                style={{ color: "#111827" }}
              />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">500,000+</h1>
              <p className="text-gray-900">Utilisateurs</p>
            </div>
          </div>
          <div className="py-6 flex items-center">
            <div className="p-4 bg-sky-600/30 rounded-lg">
              <FontAwesomeIcon
                icon={faBuilding}
                size={"xl"}
                style={{ color: "#111827" }}
              />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">5000+</h1>
              <p className="text-gray-900">Entreprises</p>
            </div>
          </div>
          <div className="py-6 flex items-center">
            <div className="p-4 bg-sky-600/30 rounded-lg">
              <FontAwesomeIcon
                icon={faVideo}
                size={"xl"}
                style={{ color: "#111827" }}
              />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">1000+</h1>
              <p className="text-gray-900">Vidéos</p>
            </div>
          </div>
          <div className="py-6 flex items-center">
            <div className="p-4 bg-sky-600/30 rounded-lg">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size={"xl"}
                style={{ color: "#111827" }}
              />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">200+</h1>
              <p className="text-gray-900">Formateurs</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={StatsImg}
        alt="Two middle age business workers smiling happy and confident. Working together with smile on face hand giving high five at the office. Image by krakenimages on unsplash"
        className="m-auto order-first md:order-last md:w-1/3 md:h-1/3 pb-5 md:pb-0"
      />
    </Layout>
  );
};

export default Stats;
