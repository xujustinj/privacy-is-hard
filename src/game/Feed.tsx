import {
  Children,
  PropsWithChildren,
  UIEvent,
  useCallback,
  useEffect,
} from "react";

export interface FeedProps extends PropsWithChildren {
  onEmpty: () => void;
  onScrollToBottom: () => void;
}

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

  return (
    <div className="feed" onScroll={onScroll}>
      {children}
    </div>
  );
}
