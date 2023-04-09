import { GameEvent } from "./Event";
import { GameState } from "./Game";

export interface EventGenerator {
  next(state: GameState): GameEvent | null;
}
