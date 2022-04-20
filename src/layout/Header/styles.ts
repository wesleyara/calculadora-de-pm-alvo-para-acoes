import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue-light);
  color: var(--shape);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 1100px;

    ul {
      list-style: none;
      display: flex;
      gap: 10px;

      li {
        padding: 25px;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover {
          background-color: var(--blue);
        }
      }
    }
  }
`;
