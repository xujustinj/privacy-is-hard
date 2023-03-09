import { FunctionComponent } from "react";

export interface GameEvent<Props extends {} = {}> {
  component: FunctionComponent<Props>;
  props: Props;
}

export interface Game {
  nextEvent(): GameEvent | null;
}
