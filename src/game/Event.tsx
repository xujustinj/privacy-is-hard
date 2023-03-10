import { FunctionComponent } from "react";

export interface GameEvent<Props = any> {
  id: string;
  component: FunctionComponent<Props>;
  props: Props;
}

export interface GameEventWrapperProps {
  onCompleteEvent(): void;
  event: GameEvent;
}

export function GameEventWrapper({
  onCompleteEvent,
  event: { component, props },
}: GameEventWrapperProps) {
  return <div>{component({ ...props, onCompleteEvent })}</div>;
}
