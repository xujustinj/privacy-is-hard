import { useEffect } from "react";
import styled from "styled-components";

export interface SourceLinkProps {
  url: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

const LinkContainer = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

  :hover {
    filter: drop-shadow(0 0 8px white);
  }
`;

const LinkText = styled.p`
  font-weight: bold;
  color: black;
  text-decoration: none !important;
  margin: 16px;
`;

export function SourceLink({
  url,
  title,
  description,
  image,
}: SourceLinkProps) {
  useEffect(() => {});
  return (
    <LinkContainer href={url} target="_blank" rel="noreferrer">
      <img src={image.url} alt={description} />
      <LinkText>{title}</LinkText>
    </LinkContainer>
  );
}
