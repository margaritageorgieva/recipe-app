import useGetData from "../hooks/useGetData";
import Carousel from "./Carousel";

function VeggieRecipes() {
  const veggieRecipes = useGetData(
    `https://api.spoonacular.com/recipes/random?apiKey=7fea270f1de148368fed32d4e034a1f8&number=10&tags=vegetarian`
  );

  return (
    <div>
      <h3>Our Vegetarian Picks</h3>
      <Carousel data={veggieRecipes} />
    </div>
  );
}

export default VeggieRecipes;
