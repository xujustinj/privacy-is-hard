import { FunctionComponent } from "react";
import styled from "styled-components";

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

const GameEventContainer = styled.div`
  width: 100%;
  padding: 32px 64px;
  background-color: none;

  &:hover {
    background-color: rgba(53, 117, 142, 0.5);
  }
`;

export function GameEventWrapper({
  finish,
  event: { Component, props },
}: GameEventWrapperProps) {
  return (
    <GameEventContainer>
      <Component {...props} finish={finish}></Component>
    </GameEventContainer>
  );
}
