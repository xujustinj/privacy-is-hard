import Earthquake from "../events/Earthquake";
import { Game, GameEvent } from "./Game";

// demo Game implementation that does 3 earthquakes and nothing else
export class EarthquakeGame implements Game {
  private count = 0;

  nextEvent(): GameEvent | null {
    this.count += 1;
    if (this.count > 3) {
      return null;
    }
    return {
      component: Earthquake,
      props: {},
    };
  }
}
