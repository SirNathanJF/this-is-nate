// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: #1a2027;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  display: flex;
  flex-direction: column;
  margin: 0 0 30px;
  overflow: hidden;

  @media (min-width: 550px) {
    max-width: 400px;
    margin: 20px;
  }

  h2 {
    margin: 15px 0;
    padding: 0 15px;
    text-align: left;
    width: 100%;
  }

  p {
    padding: 0 15px;
    margin: 0;
  }

  a {
    align-items: center;
    align-self: flex-end;
    color: #90caf9;
    display: flex;
    margin: 15px 0;
    padding: 0 10px;
    text-decoration: none;

    svg {
      margin-right: 3px;
    }

    &:hover{
      color: #ffffff;
    }
  }
`;
