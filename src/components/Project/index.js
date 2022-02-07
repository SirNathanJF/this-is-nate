// Node modules.
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
// Relative imports.
import { Wrapper } from "./styles";

function Project(props) {
  return (
    <Wrapper>
      <img alt="card-img" className="img-fluid" src={props.imgPath} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link} rel="noreferrer noopener" target="_blank">
        <BiLinkExternal /> View
      </a>
    </Wrapper>
  );
}
export default Project;
