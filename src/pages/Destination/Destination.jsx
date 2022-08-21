import styled from "styled-components";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import background from "../../assets/destination/background-destination-desktop.jpg";
import "./destination.css";

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

function Destination() {
  return (
    <Content>
      <DestinationCard />
    </Content>
  );
}

export default Destination;
