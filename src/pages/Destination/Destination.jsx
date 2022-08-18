import styled from "styled-components";
import destinations from "./destinations.js";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import background from "../../assets/destination/background-destination-desktop.jpg";

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
      <article>
        <h1>01 Pick your destination</h1>
      </article>
      {destinations.map((destination, index) => (
        <DestinationCard
          key={`${destination.name}-${index}`}
          title={destination.name}
          description={destination.description}
          distance={destination.distance}
          travel={destination.travel}
        />
      ))}
    </Content>
  );
}

export default Destination;