import { GameEvent } from "./Event";

export interface Game {
  readonly events: ReadonlyArray<GameEvent>;
  completeEvent(event: GameEvent): Game;
  isActive(event: GameEvent): boolean;

  readonly canAdvance: boolean;
  advance(): Game;
}
