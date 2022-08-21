import styled from "styled-components";
import background from "../../assets/technology/background-technology-desktop.jpg"
import TechnologyCard from "../../components/TechnologyCard/TechnologyCard.jsx"

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

function Technology() {
return(
    <Content>
      <TechnologyCard />
    </Content>
)
}
export default Technology