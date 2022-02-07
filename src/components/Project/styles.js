// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
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
    color: #555555;
    margin: 15px 0;
    padding: 0 15px;
  }

  p {
    color: #777777;
    padding: 0 10px;
    margin: 0;
  }

  a {
    align-items: center;
    align-self: flex-end;
    display: flex;
    margin: 15px 0;
    padding: 0 10px;
    text-decoration: none;

    svg {
      margin-right: 3px;
    }
  }
`;
