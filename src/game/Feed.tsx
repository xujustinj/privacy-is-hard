import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Colors } from "../util/colors";

export interface FeedProps extends PropsWithChildren {
  onAdvance: (() => void) | null;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionBackground};
  color: white;
  overflow-y: scroll;
  width: 60%;
  align-items: center;
`;

const ContinueButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: medium;
  padding: 8px 16px;
  margin: 32px auto;
  color: rgb(16, 16, 16);
  background-color: rgb(255, 157, 50);
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
