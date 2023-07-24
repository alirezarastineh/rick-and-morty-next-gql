import React from "react";
import styled from "styled-components";

interface SubTitleProps {
  children: string;
  $align: "left" | "center" | "right";
  $mt?: number;
  $mb?: number;
}

const SubTitle = ({ children, $align, $mb, $mt }: SubTitleProps) => (
  <StyledSubTitle $mb={$mb} $mt={$mt} $align={$align}>
    {children}
  </StyledSubTitle>
);

interface StyledSubTitleProps {
  $align: "left" | "center" | "right";
  $mt?: number;
  $mb?: number;
}

const StyledSubTitle = styled.h2<StyledSubTitleProps>`
  font-size: 22px;
  text-align: ${(props) => props.$align};
  width: 100%;
  margin-top: ${(props) => (props.$mt ? `${props.$mt}px` : 0)};
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}px` : 0)};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default SubTitle;
