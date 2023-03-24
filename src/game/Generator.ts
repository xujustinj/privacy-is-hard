import { createContext } from "react";
import { Balantir } from "../events/Balantir";
import { BitFit } from "../events/BitFit/BitFit";
import { CreditCash } from "../events/CreditCash";
import { BalantirInfo } from "../info/BalantirInfo";
import { CreditCashInfo } from "../info/CreditCashInfo";

import { GameEvent } from "./Event";

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
      id: `bitfit`,
      eventRender: { Component: BitFit },
      infoRender: null,
    },
    {
      id: `creditcash`,
      eventRender: { Component: CreditCash },
      infoRender: { Component: CreditCashInfo },
    },
    {
      id: `balantir`,
      eventRender: { Component: Balantir },
      infoRender: { Component: BalantirInfo },
    },
    {
      id: `bitfit`,
      eventRender: { Component: BitFit },
      infoRender: null,
    }
  ];

  public next(): GameEvent | null {
    if (this.state.count < this.events.length) {
      const event = this.events[this.state.count];
      this.state.count++;
      return event;
    } else {
      return null;
    }
  }
}
