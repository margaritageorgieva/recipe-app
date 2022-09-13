import HomePage from "./HomePage";
import { Routes, Route, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";
import styled from "styled-components";
import Search from "../components/Search";
import Categories from "../components/Categories";

function RecipeApp() {
  return (
    <>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicios Recipes </Logo>
      </Nav>
      <Search />
      <Categories />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 400;
`;
const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
`;

export default RecipeApp;
