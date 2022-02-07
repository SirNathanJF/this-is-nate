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
    align-self: center;
    max-width: 600px;
    min-height: calc(100vh - 210px);
    padding: 0 0 50px;

    .text-content {
      align-items: flex-start;
      text-align: left;
    }

    .headshot {
      align-items: flex-start;
      display: flex;
      flex-flow: row-reverse nowrap;

      img {
        margin: 15px, 0, 15px, 50px;
      }
    }

    h2 {
      margin: 30px 0 15px;
    }
  }

  img {
    border-radius: 10px;
    margin: 8px 0 15px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
    }
  }

  .hobbies {
    color: #ffffff;
    padding-left: 18px;
    margin: 0 0 16px;
  }

  figure {
    color: #90caf9;
    border-left: 3px solid #ffffff;
    padding-left: 15px;

    figcaption {
      font-size: 0.8em;
    }
  }

  .icons {
    color: #90caf9;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0 0 20px;
    justify-content: space-around;
    width: 100%;

    svg {
      height: 50px;
      width: 50px;
    }
  }
`;
