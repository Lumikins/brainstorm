import Logo from "@/assets/logo.svg";
import { categories } from "@/data/categories";
import { links } from "@/data/links";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../Layout";

const Footer = () => {
  return (
    <Layout className="grid md:grid-cols-6 grid-cols-2 gap-8 ml-5">
      <div className="col-span-2">
        <img src={Logo} height={150} width={150} />
        <h3 className="text-xl font-bold mt-10">Nous rejoindre</h3>
        <h3 className="py-2 text-gray-900">Téléphone : +33 (0) 122334455</h3>
        <h3 className="py-2 text-gray-900">
          24 Avenue des Champs-Élysées <br /> 75008 Paris
        </h3>
        <h3 className="py-2 text-gray-900">Email: service@brainstorm.io</h3>
        <div className="flex py-4 gap-4">
          <div className="py-4 px-5 bg-sky-600/30 rounded-xl hover:cursor-pointer group social">
            <FontAwesomeIcon
              icon={faFacebookF}
              size="xl"
              className="social-icon"
            />
          </div>
          <div className="p-4 bg-sky-600/30 rounded-xl hover:cursor-pointer group social ">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="social-icon"
            />
          </div>
          <div className="p-4 bg-sky-600/30 rounded-xl hover:cursor-pointer group social">
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              className="social-icon"
            />
          </div>
          <div className="p-4 bg-sky-600/30 rounded-xl hover:cursor-pointer group social">
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              className="social-icon"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold uppercase">Découvrir</h3>
        <ul className="py-6 text-gray-900 flex flex-col gap-2 w-fit">
          {links.map((link) => (
            <li
              key={link.id}
              className="py-2 cursor-pointer hover:text-sky-600"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold uppercase">Catégories</h3>
        <ul className="py-6 text-gray-900">
          {categories.map((category) => (
            <li
              key={category.id}
              className="py-2 cursor-pointer hover:text-sky-600"
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-2 w-[380px] md:w-full md:justify-self-end md:mr-5 mb-10">
        <h3 className="text-lg font-bold uppercase">S&apos;abonner</h3>
        <p className="py-2 text-gray-900">
          Inscrivez-vous à notre newsletter pour recevoir les dernières
          nouvelles
        </p>
        <form className="bg-white mb-5 p-4 drop-shadow-md rounded-md flex justify-between">
          <input
            type="email"
            placeholder="Email"
            className="bg-sky-100/10 w-full outline-none"
          />
        </form>
        <button className="px-5 py-3 rounded-md bg-emerald-600 hover:bg-white text-white hover:text-emerald-600 border border-transparent hover:border-emerald-600 font-medium md:w-fit w-full">
          S&apos;abonner
        </button>
        <p className="text-center md:text-left text-xs md:text-sm mt-10">
          &copy; BrainStorm 2023. Tous droits réservés - KrassDev.
        </p>
      </div>
    </Layout>
  );
};

export default Footer;
