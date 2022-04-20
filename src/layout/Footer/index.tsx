import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Footer() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/politica-de-privacidade");
  }
  return (
    <Container>
      <p>
        &copy; {new Date().getFullYear()} Wesley Araújo - Todos os direitos
        reservados.
      </p>

      <span onClick={handleNavigate}>Política de Privacidade</span>
    </Container>
  );
}
