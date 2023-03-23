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
  margin: auto;
  flex-grow: 1;
  height: 100%;
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
