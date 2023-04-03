import styled from "styled-components";

export interface SourceLinkProps {
  url: string;
  site_name: string;
  title: string;
  description: string;
  image: {
    url: string | Array<string>;
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
    outline: 4px rgb(53, 117, 142) solid;
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
  site_name,
  title,
  description,
  image,
}: SourceLinkProps) {
  const displayName = title.includes(" - ") ? title : `${title} - ${site_name}`;
  const imageUrl = image.url instanceof Array ? image.url[0] : image.url;
  return (
    <LinkContainer href={url} target="_blank" rel="noreferrer">
      <img src={imageUrl} alt={description} />
      <LinkText>{displayName}</LinkText>
    </LinkContainer>
  );
}
