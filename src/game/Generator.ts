import { createContext } from "react";
import { Earthquake } from "../events/Earthquake";
import { Balantir } from "../events/Balantir";
import { Interactive } from "../events/InteractiveExample";
import { BalantirInfo } from "../info/BalantirInfo";
import { CreditCashInfo } from "../info/CreditCashInfo";
import { EarthquakeInfo } from "../info/EarthquakeInfo";

import { GameEvent } from "./Event";
import { CreditCashInteractive } from "../events/CreditCard/CreditCashInteractive"

export class GeneratorState {
  count = 0;
  earthquake = false;
  balantir = false;
  creditcashinteractive = false;
  creditcashpost = false;
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

export class SequenceGenerator implements Generator {
  public readonly state = new GeneratorState();
  protected readonly events = [
    {
      id: `creditcashinteractive-${this.state.count}`,
      eventRender: {
        Component: CreditCashInteractive,
        message: `Event #${this.state.count}. On a pit stop to WcDonald's, you get two number 9s, a number 9 large,
        a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda. How would you like to pay?`
      },
      infoRender: { Component: CreditCashInfo },
    },
    {
      id: `balantir-${this.state.count}`,
      eventRender: { Component: Balantir },
      infoRender: { Component: BalantirInfo },
    }
  ];

  public next(): GameEvent | null {
    if(this.state.count < this.events.length) {
      this.state.count++;
      return this.events[this.state.count]
    } else {
      return null;
    }
  }
}

/**export class RandomGenerator implements Generator {
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
    if (!this.state.balantir && Math.random() > 0.3) {
      return {
        id: `balantir-${this.state.count}`,
        eventRender: { Component: Balantir },
        infoRender: { Component: BalantirInfo },
      };
    }
    if (!this.state.creditcashinteractive && Math.random() > 0.7) {
      return {
        id: `creditcashinteractive-${this.state.count}`,
        eventRender: {
          Component: CreditCashInteractive,
          message: `Event #${this.state.count}. On a pit stop to WcDonald's, you get two number 9s, a number 9 large,
          a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda. How would you like to pay?`
        },
        infoRender: { Component: CreditCashInfo },
      };
    }
    if (!this.state.creditcashpost && this.state.creditcashinteractive && Math.random() > 0.7) {
      return {
        id: `creditcashpostcondition-${this.state.count}`,
        eventRender: { Component: CreditCashPostcondition },
        infoRender: { Component: CreditCashInfo },
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
} **/
