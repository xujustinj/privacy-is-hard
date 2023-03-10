import { FunctionComponent } from "react";

export interface BaseEventProps {
  onCompleteEvent(): void;
}

export interface GameEvent<Props extends BaseEventProps = any> {
  id: string;
  Component: FunctionComponent<Props>;
  props: Props;
}

export interface GameEventWrapperProps {
  finish: () => void;
  event: GameEvent;
}

export function GameEventWrapper({
  finish,
  event: { Component, props },
}: GameEventWrapperProps) {
  return (
    <div>
      <Component {...props} finish={finish}></Component>
    </div>
  );
}
