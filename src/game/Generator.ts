import { createContext } from "react";
import { Earthquake } from "../events/Earthquake";
import { Interactive } from "../events/InteractiveExample";
import { EarthquakeInfo } from "../info/EarthquakeInfo";
import { GameEvent } from "./Event";

export class GeneratorState {
  count = 0;
  earthquake = false;
}

export interface Generator {
  readonly state: GeneratorState;
  next: () => GameEvent | null;
}

// Provides the state of the Generator; consumers can edit the state as they
// please. We don't have to let React know about any changes to state because
// it only affects the next event, not the current events being displayed.
export const GeneratorStateContext = createContext<GeneratorState>(
  new GeneratorState()
);

export class RandomGenerator implements Generator {
  // The generator state only affects what event comes next (if any).
  // We don't have to let React know about any changes to that state;
  // it can just be edited directly.
  public readonly state = new GeneratorState();

  public next(): GameEvent | null {
    this.state.count++;
    if (!this.state.earthquake && Math.random() < 0.3) {
      return {
        id: `earthquake-${this.state.count}`,
        eventRender: { Component: Earthquake },
        infoRender: { Component: EarthquakeInfo },
      };
    }
    return {
      id: `interactive-${this.state.count}`,
      eventRender: {
        Component: Interactive,
        message: `Event #${this.state.count}. There ${
          this.state.earthquake ? "has" : "has not"
        } been an earthquake.`,
      },
      infoRender: null,
    };
  }
}
