import { PropsWithChildren } from "react";
import styled from "styled-components";

export interface FeedProps extends PropsWithChildren {
  onAdvance: (() => void) | null;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: beige;
  width: 50vw;
  height: 50vh;
  padding: 32px;
  overflow-y: scroll;
  margin: auto;
`;

export function Feed({ children, onAdvance }: FeedProps) {
  return (
    <FeedContainer>
      {children}
      <button onClick={onAdvance ?? (() => {})} disabled={onAdvance === null}>
        Continue
      </button>
    </FeedContainer>
  );
}
