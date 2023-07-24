import React from "react";
import styled from "styled-components";

import LinkCard from "./link-card";
import images from "./constants";

const CardsContainer = () => {
  return (
    <Container>
      <LinkCard
        imageUrl={images.locations}
        name="Locations"
        linkUrl="/locations"
      />
      <LinkCard
        imageUrl={images.characters}
        name="Characters"
        linkUrl="/characters"
      />
      <LinkCard
        imageUrl={images.episodes}
        name="Episodes"
        linkUrl="/episodes"
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export default CardsContainer;
