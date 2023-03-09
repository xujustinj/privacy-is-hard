import { GameEvent } from "./Event";

export interface Game {
  nextEvent(): GameEvent<any> | null;
}
