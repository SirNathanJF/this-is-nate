// Node modules.
import styled from "styled-components";

export const Wrapper = styled.footer`
  align-items: center;
  background-image: linear-gradient(
    to right,
    #2b5876 0%,
    #4e4376 51%,
    #2b5876 100%
  );
  background: #2b5876;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;

  p {
    color: #ffffff;
    text-align: center;

    a {
      color: #ffffff;
      font-weight: bold;
      text-decoration: none;
    }
  }

  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      list-style: none;
      padding: 0 5px;

      a {
        color: #ffffff;

        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`;
