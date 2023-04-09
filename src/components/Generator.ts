import { createContext } from "react";
import { DnaTestChoice, TwentyTwoandMe } from "../events/22andMe/Dna";
import { TwentyTwoandMeA1 } from "../events/22andMe/DnaA1";
import { TwentyTwoandMeB1 } from "../events/22andMe/DnaB1";
import { AngelTrend, AngelTrendChoice } from "../events/AngelTrend/AngelTrend";
import { AngelTrendA1 } from "../events/AngelTrend/AngelTrendA1";
import { Balantir } from "../events/Balantir";
import { BitFit, BitFitChoice } from "../events/BitFit/BitFit";
import { BitFitA1 } from "../events/BitFit/BitFitA1";
import { BitFitA2 } from "../events/BitFit/BitFitA2";
import { BitFitA3 } from "../events/BitFit/BitFitA3";
import { BitFitB1 } from "../events/BitFit/BitFitB1";
import { BitFitB2 } from "../events/BitFit/BitFitB2";
import { Cardiac, CardiacChoice } from "../events/Cardiac/Cardiac";
import { CardiacB1 } from "../events/Cardiac/CardiacB1";
import { CardiacB2 } from "../events/Cardiac/CardiacB2";
import { CardiacB3 } from "../events/Cardiac/CardiacB3";
import {
  CleanStreet,
  CleanStreetChoice,
} from "../events/CleanStreet/CleanStreet";
import { CleanStreetAC1 } from "../events/CleanStreet/CleanStreetAC1";
import { CleanStreetPrecondition } from "../events/CleanStreet/CleanStreetPrecondition";
import { CreditCash } from "../events/CreditCash";
import { Ding, SafetyChoice } from "../events/DingBell/Ding";
import { DingA1, TermsChoice } from "../events/DingBell/DingA1";
import { DingAA1 } from "../events/DingBell/DingAA1";
import { DingAA2 } from "../events/DingBell/DingAA2";
import { DingAA3 } from "../events/DingBell/DingAA3";
import { DingB1 } from "../events/DingBell/DingB1";
import { GoodEnd } from "../events/GoodEnd";
import { Moogle, MoogleChoice } from "../events/Moogle/Moogle";
import { MoogleA1 } from "../events/Moogle/MoogleA1";
import { MoogleA2 } from "../events/Moogle/MoogleA2";
import { MoogleA3 } from "../events/Moogle/MoogleA3";
import { MoogleB1 } from "../events/Moogle/MoogleB1";
import { Pedalton } from "../events/Pedalton";
import { PlankChallenge } from "../events/PlankChallenge";
import { QRCode } from "../events/QRCode";
import { Start } from "../events/Start";
import { TalkGPT, TalkGPTChoice } from "../events/TalkGPT/TalkGPT";
import { TalkGPTA1 } from "../events/TalkGPT/TalkGPTA1";
import { TalkGPTA2 } from "../events/TalkGPT/TalkGPTA2";
import { GameEvent } from "../model/Event";

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
      id: "start",
      eventRender: { Component: Start },
    },
    {
      id: "bitfit",
      eventRender: { Component: BitFit },
      next: ({ bitFitChoice }: GeneratorState) => {
        switch (bitFitChoice) {
          case null:
            return null;
          case BitFitChoice.YES:
            return [
              {
                id: "bitfitA1",
                eventRender: { Component: BitFitA1 },
              },
              {
                id: "bitfitA2",
                eventRender: { Component: BitFitA2 },
              },
              {
                id: "bitfitA3",
                eventRender: { Component: BitFitA3 },
              },
            ];
          case BitFitChoice.NO:
            return [
              {
                id: "bitfitB1",
                eventRender: { Component: BitFitB1 },
              },
              {
                id: "bitfitB2",
                eventRender: { Component: BitFitB2 },
              },
            ];
        }
      },
    },
    {
      id: "plankchallenge",
      eventRender: { Component: PlankChallenge },
    },
    {
      id: "balantir",
      eventRender: { Component: Balantir },
    },
    {
      id: "creditcash",
      eventRender: { Component: CreditCash },
    },
    {
      id: "qrcode",
      eventRender: { Component: QRCode },
    },
    {
      id: "moogle",
      eventRender: { Component: Moogle },
      next: ({ moogleChoice }: GeneratorState) => {
        switch (moogleChoice) {
          case null:
            return null;
          case MoogleChoice.YES:
            return [
              {
                id: "MoogleA1",
                eventRender: { Component: MoogleA1 },
              },
              {
                id: "MoogleA2",
                eventRender: { Component: MoogleA2 },
              },
              {
                id: "MoogleA3",
                eventRender: { Component: MoogleA3 },
              },
            ];
          case MoogleChoice.NO:
            return [
              {
                id: "MoogleB1",
                eventRender: { Component: MoogleB1 },
              },
            ];
        }
      },
    },
    {
      id: "precleanstreet",
      eventRender: { Component: CleanStreetPrecondition },
    },
    {
      id: "cleanstreet",
      eventRender: { Component: CleanStreet },
      next: ({ cleanStreetChoice }: GeneratorState) => {
        switch (cleanStreetChoice) {
          case null:
            return null;
          case CleanStreetChoice.DONATION:
            return [];
          case CleanStreetChoice.CLEAN:
            return [
              {
                id: "CleanStreetAC1",
                eventRender: { Component: CleanStreetAC1 },
                infoRender: null,
              },
            ];
          case CleanStreetChoice.BOTH:
            return [
              {
                id: "CleanStreetAC1",
                eventRender: { Component: CleanStreetAC1 },
                infoRender: null,
              },
            ];
        }
      },
    },
    {
      id: "ding",
      eventRender: { Component: Ding },
      next: ({ safetyChoice }: GeneratorState) => {
        switch (safetyChoice) {
          case null:
            return null;
          case SafetyChoice.CAMERA:
            return [
              {
                id: "DingA1",
                eventRender: { Component: DingA1 },
                infoRender: null,
                next: ({ termsChoice }: GeneratorState) => {
                  switch (termsChoice) {
                    case null:
                      return null;
                    case TermsChoice.ACCEPT:
                      return [
                        {
                          id: "DingAA1",
                          eventRender: { Component: DingAA1 },
                          infoRender: null,
                        },
                        {
                          id: "DingAA2",
                          eventRender: { Component: DingAA2 },
                          infoRender: null,
                        },
                        {
                          id: "DingAA3",
                          eventRender: { Component: DingAA3 },
                          infoRender: null,
                        },
                      ];
                    case TermsChoice.DECLINE:
                      return [];
                  }
                },
              },
            ];
          case SafetyChoice.BODYGUARD:
            return [
              {
                id: "DingB1",
                eventRender: { Component: DingB1 },
                infoRender: null,
              },
            ];
        }
      },
    },
    {
      id: "22andMe",
      eventRender: { Component: TwentyTwoandMe },
      next: ({ dnaTestChoice }: GeneratorState) => {
        switch (dnaTestChoice) {
          case null:
            return null;
          case DnaTestChoice.NO:
            return [
              {
                id: "TwentyTwoandMeA1",
                eventRender: { Component: TwentyTwoandMeA1 },
                infoRender: null,
              },
            ];
          case DnaTestChoice.YES:
            return [
              {
                id: "TwentyTwoandMeB1",
                eventRender: { Component: TwentyTwoandMeB1 },
                infoRender: null,
              },
            ];
        }
      },
    },
    {
      id: "pedalton",
      eventRender: { Component: Pedalton },
    },
    {
      id: "angel",
      eventRender: { Component: AngelTrend },
      next: ({ angelTrendChoice }: GeneratorState) => {
        switch (angelTrendChoice) {
          case null:
            return null;
          case AngelTrendChoice.YES:
            return [
              {
                id: "AngelTrendA1",
                eventRender: { Component: AngelTrendA1 },
                infoRender: null,
              },
            ];
          case AngelTrendChoice.NO:
            return [];
        }
      },
    },
    {
      id: "talkgpt",
      eventRender: { Component: TalkGPT },
      next: ({ talkgptChoice }: GeneratorState) => {
        switch (talkgptChoice) {
          case null:
            return null;
          case TalkGPTChoice.NO:
            return [];
          case TalkGPTChoice.YES:
            return [
              {
                id: "TalkGPTA1",
                eventRender: { Component: TalkGPTA1 },
                infoRender: null,
              },
              {
                id: "TalkGPTA2",
                eventRender: { Component: TalkGPTA2 },
                infoRender: null,
              },
            ];
        }
      },
    },
    {
      id: "cardiac",
      eventRender: { Component: Cardiac },
      next: ({ dnaTestChoice }: GeneratorState) => {
        switch (dnaTestChoice) {
          case null:
            return null;
          case DnaTestChoice.NO:
            return [];
          case DnaTestChoice.YES:
            return [
              {
                id: "CardiacB1",
                eventRender: { Component: CardiacB1 },
              },
              {
                id: "CardiacB2",
                eventRender: { Component: CardiacB2 },
              },
              {
                id: "CardiacB3",
                eventRender: { Component: CardiacB3 },
              },
            ];
        }
      },
    },
    {
      id: "goodending",
      eventRender: { Component: GoodEnd },
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
