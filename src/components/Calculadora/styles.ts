import styled from "styled-components";

export const Container = styled.main`
  width: max(61.49vw, 350px);
  margin: 50px auto;
  background: var(--blue-light);
  padding: max(3.66vw, 30px);
  color: var(--shape);

  h2 {
    font-size: max(1.75vw, 18px);
  }

  span {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  input {
    padding: 20px;
    border: none;
    background-color: white;
    width: max(18.3vw, 170px);
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button {
    padding: 20px;
    border: none;
    background-color: white;
    cursor: pointer;
  }

  .response {
    text-align: justify;
    h2 {
      text-align: center;
      margin-top: 15px;
    }
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 40px;
  }

  a {
    text-decoration: none;
    color: var(--shape);
  }
`;
