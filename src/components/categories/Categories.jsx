import { categories } from "@/data/categories";
import React from "react";
import Layout from "../Layout";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold md:leading-loose uppercase text-center">
        Nos catégories<span className="text-sky-600"> les plus populaires</span>
      </h1>
      <p className="md:text-xl text-gray-900 text-center">
        Choisissez un cours parmi une large sélection de catégories
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-5 py-12 pb-24 gap-4">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
