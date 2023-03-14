import { PropsWithChildren } from "react";
import styled from "styled-components";

export interface FeedProps extends PropsWithChildren {
  onAdvance: (() => void) | null;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: rgba(0,0,0,.5);
  color: #fff;
  width: 75vw;
  height: 60vh;
  padding: 32px;
  overflow-y: scroll;
  margin: auto;
`;

export function Feed({ children, onAdvance }: FeedProps) {
  return (
    <FeedContainer>
      {children}
      <button onClick={onAdvance ?? (() => {})} disabled={onAdvance === null} className="btn">
        Continue
      </button>
    </FeedContainer>
  );
}
