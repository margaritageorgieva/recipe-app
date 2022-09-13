import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchRecipe}`);
    setSearchRecipe("");
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <input
        onChange={(e) => setSearchRecipe(e.target.value)}
        type="text"
        value={searchRecipe}
      />
      <FaSearch />
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 0rem 10rem;
  position: relative;
  input {
    display: block;
    width: 80%;
    margin: 0 auto;
    color: white;
    border: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    background: linear-gradient(35deg, #494949f0, #313131);
    padding: 1rem 3rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
