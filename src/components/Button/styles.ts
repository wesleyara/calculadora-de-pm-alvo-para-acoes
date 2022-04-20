import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  align-items: center;
  margin: 20px auto;
  background-color: var(--blue-light);
  color: var(--shape);
  border: none;
  border-radius: 5px;

  transition: 0.2s ease-in-out;
  &:hover {
    background-color: var(--shape);
    color: var(--blue-light);
  }
`;
