import { Container } from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function Button() {
  const router = useNavigate();

  function handleNavigate() {
    router("/");
  }
  return (
    <Container onClick={handleNavigate}>
      <BsArrowLeft /> Voltar para página inicial
    </Container>
  );
}
