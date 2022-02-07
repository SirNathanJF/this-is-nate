// Node modules.
import styled from "styled-components";

export const Wrapper = styled.header`
  border-bottom: 1px solid rgba(194, 224, 255, 0.8);
  display: flex;
  flex-direction: column;
  padding: 20px 20px 15px;

  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    cursor: pointer;
    text-align: center;
  }

  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    li {
      font-size: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;

      @media (min-width: 550px) {
        padding: 0 10px;
      }

      a,
      button {
        background: none;
        border: none;
        border-bottom: 1px solid transparent;
        color: #b2bac2;
        cursor: pointer;
        margin: 0;
        padding: 0;
        text-decoration: none;
        transition: color 0.2s ease;

        &.active {
          border-bottom: 1px solid #ffffff;
          color: #ffffff;
        }
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
`;
