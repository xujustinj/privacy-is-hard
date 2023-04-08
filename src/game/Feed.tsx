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
  overflow-y: scroll;
  width: 60%;
  align-items: center;
  font-size: 14pt;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 28px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255);
    }
  }
`;

const ContinueButton = styled.button`
  border: none;
  border-radius: 8px;
  font-family: Courier;
  font-weight: bold;
  font-size: 14pt;
  padding: 8px 16px;
  margin: 32px auto;
  color: black;
  background-color: ${rgb(Colors.sunset)};
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
