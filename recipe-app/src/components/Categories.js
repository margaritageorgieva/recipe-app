import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiHamburger, GiCookingPot } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Categories() {
  return (
    <NavList>
      <CuisineLink to="/cuisine/Chinese">
        <GiNoodles />
        <h4>Chinese</h4>
      </CuisineLink>

      <CuisineLink to="/cuisine/Indian">
        <GiCookingPot />
        <h4>Indian</h4>
      </CuisineLink>

      <CuisineLink to="/cuisine/American">
        <GiHamburger />
        <h4>American</h4>
      </CuisineLink>

      <CuisineLink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CuisineLink>
    </NavList>
  );
}

const NavList = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 2rem;
`;

const CuisineLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
  svg {
    color: white;
    font-size: 1.6rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
  }
`;

export default Categories;
