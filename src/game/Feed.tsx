import { PropsWithChildren } from "react";
import styled from "styled-components";

export interface FeedProps extends PropsWithChildren {
  onAdvance: (() => void) | null;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 32px;
  overflow-y: scroll;
  margin: auto;
  flex-grow: 1;
  width: 100%;
`;

const ContinueButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: medium;
  padding: 8px 16px;
  color: rgb(16, 16, 16);
  background-color: rgb(255, 157, 50);
  margin-left: auto;
  margin-right: auto;

  &:disabled {
    background-color: rgb(128, 128, 128);
  }
`;

export function Feed({ children, onAdvance }: FeedProps) {
  return (
    <FeedContainer>
      {children}
      <ContinueButton
        onClick={onAdvance ?? (() => {})}
        disabled={onAdvance === null}
      >
        Continue
      </ContinueButton>
    </FeedContainer>
  );
}
