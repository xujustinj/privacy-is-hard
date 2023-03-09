import {
  Children,
  PropsWithChildren,
  UIEvent,
  useCallback,
  useEffect,
} from "react";
import styled from "styled-components";

export interface FeedProps extends PropsWithChildren {
  onEmpty: () => void;
  onScrollToBottom: () => void;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: beige;
  width: 50vw;
  height: 0;
  padding-top: 25vh;
  padding-bottom: 25vh;
  overflow-y: scroll;
  margin: auto;
`;

export function Feed({ children, onEmpty, onScrollToBottom }: FeedProps) {
  useEffect(() => {
    if (Children.count(children) === 0) {
      onEmpty();
    }
  }, [children, onEmpty]);

  // https://stackoverflow.com/a/49573628
  const onScroll = useCallback(
    (e: UIEvent<HTMLElement>) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target as HTMLElement;
      const y = scrollHeight - Math.ceil(scrollTop);
      console.log(y, clientHeight);
      if (y <= clientHeight) {
        console.log("BOTTOM");
        onScrollToBottom();
      }
    },
    [onScrollToBottom]
  );

  return <FeedContainer onScroll={onScroll}>{children}</FeedContainer>;
}
