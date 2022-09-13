import useGetData from "../hooks/useGetData";
import Carousel from "./Carousel";

function PopularRecipes() {
  const popularRecipes = useGetData(
    `https://api.spoonacular.com/recipes/random?apiKey=7fea270f1de148368fed32d4e034a1f8&number=10`
  );

  return (
    <div>
      <h3>Popular Recipes</h3>
      <Carousel data={popularRecipes} />
    </div>
  );
}

export default PopularRecipes;
