import React from "react";
import styled from "styled-components";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 16px 10px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export default ContentContainer;
