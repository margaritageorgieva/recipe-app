import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { RiRestaurant2Line, RiHeartLine } from "react-icons/ri";
import CardModal from "../components/CardModal";

function RecipeDetails() {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const [card, setCard] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const getDetails = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=7fea270f1de148368fed32d4e034a1f8`
    );
    const detailsData = await res.json();
    setDetails(detailsData);
  };

  const getRecipeCard = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/card?apiKey=7fea270f1de148368fed32d4e034a1f8`
    );
    const data = await res.json();
    setCard(data.url);
  };

  useEffect(() => {
    getDetails();
    getRecipeCard();
  }, [id]);
  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        <IconsWrapper>
          <div>
            <RiRestaurant2Line />
            <p className="num">{details.servings} </p> <p>servings</p>
          </div>
          <div>
            <FaRegClock />
            <p className="num"> {details.readyInMinutes}</p>
            <p>cook time</p>
          </div>
          <div>
            <RiHeartLine />
            <p className="num"> {details.aggregateLikes}</p>
            <p> likes</p>
          </div>
        </IconsWrapper>

        <ShowCard
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show recipe card
        </ShowCard>
        {isVisible && <CardModal card={card} setIsVisible={setIsVisible} />}
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 2rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
    max-width: 50rem;
  }
  ul {
    margin-top: 2rem;
  }

  .active {
    border: 2px solid #f66132;
    background: linear-gradient(to right,#f27121,#fa5441);
    color: white;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.8rem 0rem;
  svg {
    font-size: 1.2rem;
    margin-right: 0.2rem;
  }
  div {
    display: flex;
    align-items: center;

    p.num {
      font-weight: bold;
      margin-right: 0.2rem;
    }
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #f66132;
  background: white;
  border: 2px solid #f66132;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;
const ShowCard = styled.button`
  font-size: 15px;
  color: white;
  padding: 0.6rem 1rem;
  background: linear-gradient(to right, #f27121, #fa5441);
  cursor: pointer;
  border: 2px solid #f66132;
`;

const Info = styled.div`
  margin-left: 10rem;
  p {
    margin: 1.2rem 0rem;
    text-align: justify;
  }
  ul li {
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export default RecipeDetails;
