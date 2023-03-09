import { Earthquake } from "../events/Earthquake";
import { Interactive, InteractiveProps } from "../events/InteractiveExample";
import { GameEvent } from "./Event";
import { Game } from "./Game";

// Demo Game implementation that randomly gives you earthquakes and interactives
export class DemoGame implements Game {
  private count = 0;

  nextEvent(): GameEvent<{}> | GameEvent<InteractiveProps> {
    const r = Math.random();
    if (r > 0.5) {
      return {
        id: `earthquake-${this.count}`,
        component: Earthquake,
        props: {},
      };
    } else {
      return {
        id: `interactive-${this.count}`,
        component: Interactive,
        props: {
          message: `Event #${this.count}`,
        },
      };
    }
  }
}
