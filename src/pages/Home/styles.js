// Node modules.
import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 230px);

  @media (min-width: 550px) {
    min-height: calc(100vh - 210px);
    img {
      max-width: 500px;
    }
  }

  .Typewriter {
    color: #ffffff;
    font-size: 2.4rem;
    line-height: 1;
  }
`;
