// Node modules.
import styled from "styled-components";

export const Wrapper = styled.footer`
  align-items: center;
  border-top: 1px solid rgba(194, 224, 255, 0.8);
  display: flex;
  flex-direction: column;
  padding: 15px 20px;

  p {
    text-align: center;

    a {
      color: #b2bac2;
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
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
`;
