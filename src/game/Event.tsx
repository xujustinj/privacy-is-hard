import { FunctionComponent } from "react";

export interface GameEvent<Props> {
  component: FunctionComponent<Props>;
  props: Props;
}

export interface GameEventWrapperProps<P> {
  event: GameEvent<P>;
}

export function GameEventWrapper({
  event: { component, props },
}: GameEventWrapperProps<any>) {
  return <div>{component(props)}</div>;
}
