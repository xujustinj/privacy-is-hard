import { FunctionComponent } from "react";

export interface GameEvent<Props> {
  id: string;
  component: FunctionComponent<Props>;
  props: Props;
}

export interface GameEventWrapperProps {
  event: GameEvent<any>;
}

export function GameEventWrapper({
  event: { component, props },
}: GameEventWrapperProps) {
  return <div>{component(props)}</div>;
}
