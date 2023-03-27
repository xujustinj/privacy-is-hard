import { createContext } from "react";
import { DnaTestChoice } from "../events/22andMe/22andMe";
import { AngelTrendChoice } from "../events/AngelTrend";
import { Balantir } from "../events/Balantir";
import { BitFit, BitFitChoice } from "../events/BitFit/BitFit";
import { SafetyChoice } from "../events/DingBell/Ding";
import { TermsChoice } from "../events/DingBell/DingA1";
import { BitFitA1 } from "../events/BitFit/BitFitA1";
import { BitFitA2 } from "../events/BitFit/BitFitA2";
import { BitFitA3 } from "../events/BitFit/BitFitA3";
import { BitFitB1 } from "../events/BitFit/BitFitB1";
import { BitFitB2 } from "../events/BitFit/BitFitB2";
import { CardiacChoice } from "../events/Cardiac/Cardiac";
import { CreditCash } from "../events/CreditCash";
import { MoogleChoice } from "../events/Moogle/Moogle";
import { PlankChallenge } from "../events/PlankChallenge";
import { QRCode } from "../events/QRCode";
import { TalkGPTChoice } from "../events/TalkGPT/TalkGPT";

import { GameEvent } from "./Event";
import { CleanStreetChoice } from "../events/CleanStreet/CleanStreet";

export class GeneratorState {
  count = 0;
  bitFitChoice: BitFitChoice | null = null;
  moogleChoice: MoogleChoice | null = null;
  cardiacChoice: CardiacChoice | null = null;
  talkgptChoice: TalkGPTChoice | null = null;
  angelTrendChoice: AngelTrendChoice | null = null;
  dnaTestChoice: DnaTestChoice | null = null;
  safetyChoice: SafetyChoice | null = null;
  termsChoice: TermsChoice | null = null;
  cleanStreetChoice: CleanStreetChoice | null = null;
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

interface SequencedEvent extends GameEvent {
  next?: (state: GeneratorState) => ReadonlyArray<SequencedEvent> | null;
}

export class SequenceGenerator implements Generator {
  public readonly state = new GeneratorState();
  protected current: SequencedEvent | null = null;
  protected queue: ReadonlyArray<SequencedEvent> = [
    {
      id: "bitfit",
      eventRender: { Component: BitFit },
      infoRender: null,
      next: ({ bitFitChoice }: GeneratorState) => {
        switch (bitFitChoice) {
          case null:
            return null;
          case BitFitChoice.YES:
            return [
              {
                id: "bitfitA1",
                eventRender: { Component: BitFitA1 },
                infoRender: null,
              },
              {
                id: "bitfitA2",
                eventRender: { Component: BitFitA2 },
                infoRender: null,
              },
              {
                id: "bitfitA3",
                eventRender: { Component: BitFitA3 },
                infoRender: null,
              },
            ];
          case BitFitChoice.NO:
            return [
              {
                id: "bitfitB1",
                eventRender: { Component: BitFitB1 },
                infoRender: null,
              },
              {
                id: "bitfitB2",
                eventRender: { Component: BitFitB2 },
                infoRender: null,
              },
            ];
        }
      },
    },
    {
      id: "plankchallenge",
      eventRender: { Component: PlankChallenge},
      infoRender: null
    },
    {
      id: "balantir",
      eventRender: { Component: Balantir},
      infoRender: null
    },
    {
      id: "creditcash",
      eventRender: { Component: CreditCash},
      infoRender: null
    },
    {
      id: "qrcode",
      eventRender: { Component: QRCode},
      infoRender: null
    },
  ];

  public next(): GameEvent | null {
    if (this.current?.next !== undefined) {
      this.queue = [...this.current.next(this.state)!, ...this.queue];
    }
    if (this.queue.length > 0) {
      [this.current, ...this.queue] = this.queue;
      return this.current;
    } else {
      return null;
    }
  }
}
