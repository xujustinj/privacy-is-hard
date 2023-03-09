import Earthquake from "../events/Earthquake";
import { Interactive, InteractiveProps } from "../events/InteractiveExample";
import { GameEvent } from "./Event";
import { Game } from "./Game";

// Demo Game implementation that randomly gives you earthquakes and interactives
// up to a maximum of 5.
export class DemoGame implements Game {
  private count = 0;

  nextEvent(): GameEvent<{}> | GameEvent<InteractiveProps> | null {
    this.count++;
    if (this.count > 5) {
      return null;
    }

    const r = Math.random();
    if (r > 0.5) {
      return {
        component: Earthquake,
        props: {},
      };
    } else {
      return {
        component: Interactive,
        props: {
          message: `Event #${this.count}`,
        },
      };
    }
  }
}
