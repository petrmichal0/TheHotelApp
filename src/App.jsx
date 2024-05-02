import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis h1</Heading>

            <div>
              <Heading as="h2">The Wild Oasis h2</Heading>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">The Wild Oasis h3</Heading>

            <form>
              <Input type="number" placeholder="Number of quests" />
              <Input type="number" placeholder="Number of quests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
