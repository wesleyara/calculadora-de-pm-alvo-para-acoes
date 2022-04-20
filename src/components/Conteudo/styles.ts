import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1100px;
  min-width: 300px;
  margin: 80px auto;
  padding: max(3.66vw, 30px);

  text-align: justify;
  font-size: max(1.46vw, 16px);
  background-color: var(--blue-light);
  color: var(--shape);

  .gif {
    display: flex;
    justify-content: center;

    img {
      width: 80%;
    }
  }

  a {
    display: block;
    text-align: center;
    color: var(--green);
  }
`;
