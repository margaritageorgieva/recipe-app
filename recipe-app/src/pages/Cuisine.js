import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipesList from "../components/RecipesList";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=7fea270f1de148368fed32d4e034a1f8&cuisine=${name}&number=9`
    );
    const recipes = await res.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return <RecipesList data={cuisine} />;
}

export default Cuisine;
