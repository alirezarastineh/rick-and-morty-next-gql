import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: string;
  $align: "left" | "center" | "right";
  $mt?: number;
  $mb?: number;
}

const Title = ({ children, $align, $mt, $mb }: TitleProps) => (
  <StyledTitle $align={$align} $mt={$mt} $mb={$mb}>
    {children}
  </StyledTitle>
);

interface StyledTitleProps {
  $align: "left" | "center" | "right";
  $mt?: number;
  $mb?: number;
}

const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: 32px;
  text-align: ${(props) => props.$align};
  width: 100%;
  margin-top: ${(props) => (props.$mt ? `${props.$mt}px` : 0)};
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}px` : 0)};
`;

export default Title;
