import React from "react";
import styled from "styled-components";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Container>{children}</Container>
);

const Container = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #22222e;
  display: flex;
  justify-content: center;
`;

export default MainLayout;
