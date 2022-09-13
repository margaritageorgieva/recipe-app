import { useState, useEffect } from "react";

export default function useGetData(url) {
  let [recipes, setRecipes] = useState([]);

  async function getRecipes() {
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.recipes);
  }

  useEffect(() => {
    getRecipes();
  }, [url]);

  return recipes;
}
