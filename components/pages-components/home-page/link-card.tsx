import React, { useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

interface CardProps {
  name: string;
  imageUrl: string;
  linkUrl: string;
}

const LinkCard = ({ name, imageUrl, linkUrl }: CardProps) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(linkUrl);
  }, [linkUrl, router]);

  return (
    <ImageWrapper onClick={onClick} $imageUrl={imageUrl}>
      <Content>{name}</Content>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<{ $imageUrl: string }>`
  position: relative;
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$imageUrl});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    opacity: 0.4;
    transition: all 0.7s;
  }

  &:hover {
    &::before {
      opacity: 0.9;
    }
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export default LinkCard;
