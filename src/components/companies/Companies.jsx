import CompLogo1 from "@/assets/comp1.png";
import CompLogo2 from "@/assets/comp2.png";
import CompLogo3 from "@/assets/comp3.png";
import CompLogo4 from "@/assets/comp4.png";
import React from "react";
import Layout from "../Layout";

const Companies = () => {
  return (
    <Layout className="md:py-12">
      <h1 className="text-center text-2xl font-bold mb-2 uppercase">
        Plus de <span className="text-sky-600">5000 entreprises</span> dans le
        monde entier nous font confiance
      </h1>
      <p className="text-center text-gray-900 md:text-xl">
        Les plus grandes entreprises du monde font confiance à nos cours pour
        former leurs employés. En voici quelques-unes :
      </p>
      <div className="md:flex grid grid-cols-2 items-center justify-center justify-items-center md:gap-8 gap-1 md:py-8 py-5">
        <img src={CompLogo1} className="w-full h-40 object-contain" />
        <img src={CompLogo2} className="w-full h-40 object-contain" />
        <img src={CompLogo3} className="w-full h-40 object-contain" />
        <img src={CompLogo4} className="w-full h-40 object-contain" />
      </div>
    </Layout>
  );
};

export default Companies;
