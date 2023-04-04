import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Colors, rgb, rgba } from "../util/colors";

export interface FeedProps extends PropsWithChildren {
  onAdvance: (() => void) | null;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${rgba(Colors.sectionBackground)};
  color: white;
  overflow-y: scroll;
  width: 60%;
  align-items: center;
  font-size: 14pt;
  color: white;
`;

const ContinueButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 14pt;
  padding: 8px 16px;
  margin: 32px auto;
  color: black;
  background-color: ${rgb(Colors.princetonOrange)};
`;

export function Feed({ children, onAdvance }: FeedProps) {
  return (
    <FeedContainer>
      {children}
      {onAdvance !== null && (
        <ContinueButton onClick={onAdvance ?? (() => {})}>
          Continue
        </ContinueButton>
      )}
    </FeedContainer>
  );
}
