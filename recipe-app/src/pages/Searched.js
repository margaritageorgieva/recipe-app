import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearchedRecipes = async (query) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=7fea270f1de148368fed32d4e034a1f8&query=${query}&number=9`
    );
    const recipes = await res.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearchedRecipes(params.search);
  }, [params.search]);

  return <RecipesList data={searchedRecipes} />;
}

export default Searched;
