import { PropsWithChildren } from "react";

export interface FeedProps extends PropsWithChildren {}

export function Feed({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
