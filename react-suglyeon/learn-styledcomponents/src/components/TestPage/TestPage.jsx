import React from "react";
import { StContents, StTitle, StWrapper } from "./styles";

export default function TestPage({ title, contents }) {
  return (
    <StWrapper>
      <StTitle>{title}</StTitle>
      <StContents>{contents}</StContents>
    </StWrapper>
  );
}
