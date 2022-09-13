import styled from "styled-components";

function CardModal({ card, setIsVisible }) {
  function handleClose() {
    setIsVisible(false);
  }
  return (
    <ModalWrapper>
      <div>
        <span onClick={handleClose}>❌</span>
        <img src={card} alt="recipe card" />
      </div>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(200, 200, 200, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: contents;
  }
  img {
    width: 55%;
  }
  span {
    position: absolute;
    top: 1.2rem;
    right: 3rem;
    cursor: pointer;
  }
`;
export default CardModal;
