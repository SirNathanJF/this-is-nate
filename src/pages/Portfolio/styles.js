// Node modules.
import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 230px);
  padding: 0 0 10px;

  @media (min-width: 550px) {
    min-height: calc(100vh - 210px);

    .projects {
      align-items: flex-start;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
  }

  h1 {
    margin: 0;
  }
`;
