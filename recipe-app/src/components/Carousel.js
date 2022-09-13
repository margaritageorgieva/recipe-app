import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Carousel({ data }) {
  return (
    <Wrapper>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {data.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 2rem 0rem 3rem;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    width: 90%;
    height: 35%;
    color: white;
    text-align: center;
    font-weight: bold;
    position: absolute;
    left: 50%;
    bottom: 0%;
    z-index: 10;
    transform: translate(-50%, 0%);
  }
`;

const Gradient = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Carousel;
