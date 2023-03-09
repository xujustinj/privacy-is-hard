import { PropsWithChildren } from "react";

export interface FeedProps extends PropsWithChildren {}

function Feed({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default Feed;
