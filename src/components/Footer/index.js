import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Wrapper } from "./styles";

function Footer() {
  return (
    <Wrapper>
      <p>
        Made with with ❤️ by{" "}
        <a
          href="https://github.com/SirNathanJF"
          rel="noreferrer noopener"
          target="_blank"
        >
          Nathan Flessner
        </a>
        .
      </p>

      <ul>
        <li>
          <a
            href="https://github.com/SirNathanJF"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nathan-flessner/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="mailto:nathanflessner@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiTwotoneMail />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Footer;
