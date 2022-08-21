import styled from "styled-components";
import background from "../../assets/crew/background-crew-desktop.jpg";
import CrewCard from "../../components/CrewCard/CrewCard";

const Content = styled.section`
  -index: 0;
  height: 100vh;
  width: 100vw;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffff;
`;

function Crew() {
  return (
    <Content>
      <CrewCard />
    </Content>
  );
}

export default Crew;
