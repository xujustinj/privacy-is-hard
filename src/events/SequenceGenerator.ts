import { GameEvent } from "../model/Event";
import { EventGenerator } from "../model/EventGenerator";
import { GameState } from "../model/Game";
import { DnaTestChoice, TwentyTwoandMe } from "./22andMe/Dna";
import { TwentyTwoandMeA1 } from "./22andMe/DnaA1";
import { TwentyTwoandMeB1 } from "./22andMe/DnaB1";
import { AngelTrend, AngelTrendChoice } from "./AngelTrend/AngelTrend";
import { AngelTrendA1 } from "./AngelTrend/AngelTrendA1";
import { Balantir } from "./Balantir";
import { BitFit, BitFitChoice } from "./BitFit/BitFit";
import { BitFitA1 } from "./BitFit/BitFitA1";
import { BitFitA2 } from "./BitFit/BitFitA2";
import { BitFitA3 } from "./BitFit/BitFitA3";
import { BitFitB1 } from "./BitFit/BitFitB1";
import { BitFitB2 } from "./BitFit/BitFitB2";
import { Cardiac } from "./Cardiac/Cardiac";
import { CardiacB1 } from "./Cardiac/CardiacB1";
import { CardiacB2 } from "./Cardiac/CardiacB2";
import { CardiacB3 } from "./Cardiac/CardiacB3";
import { CleanStreet, CleanStreetChoice } from "./CleanStreet/CleanStreet";
import { CleanStreetAC1 } from "./CleanStreet/CleanStreetAC1";
import { CleanStreetPrecondition } from "./CleanStreet/CleanStreetPrecondition";
import { CreditCash } from "./CreditCash";
import { Ding, SafetyChoice } from "./DingBell/Ding";
import { DingA1, TermsChoice } from "./DingBell/DingA1";
import { DingAA1 } from "./DingBell/DingAA1";
import { DingAA2 } from "./DingBell/DingAA2";
import { DingAA3 } from "./DingBell/DingAA3";
import { DingB1 } from "./DingBell/DingB1";
import { GoodEnd } from "./GoodEnd";
import { Moogle, MoogleChoice } from "./Moogle/Moogle";
import { MoogleA1 } from "./Moogle/MoogleA1";
import { MoogleA2 } from "./Moogle/MoogleA2";
import { MoogleA3 } from "./Moogle/MoogleA3";
import { MoogleB1 } from "./Moogle/MoogleB1";
import { Pedalton } from "./Pedalton";
import { PlankChallenge } from "./PlankChallenge";
import { QRCode } from "./QRCode";
import { Start } from "./Start";
import { TalkGPT, TalkGPTChoice } from "./TalkGPT/TalkGPT";
import { TalkGPTA1 } from "./TalkGPT/TalkGPTA1";
import { TalkGPTA2 } from "./TalkGPT/TalkGPTA2";

interface SequencedEvent extends GameEvent {
  next?: (state: GameState) => ReadonlyArray<SequencedEvent> | null;
}

export class SequenceGenerator implements EventGenerator {
  protected current: SequencedEvent | null = null;
  protected queue: ReadonlyArray<SequencedEvent> = [
    {
      id: "start",
      eventRender: { Component: Start },
    },
    {
      id: "bitfit",
      eventRender: { Component: BitFit },
      next: ({ bitFitChoice }: GameState) => {
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
      next: ({ moogleChoice }: GameState) => {
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
      next: ({ cleanStreetChoice }: GameState) => {
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
      next: ({ safetyChoice }: GameState) => {
        switch (safetyChoice) {
          case null:
            return null;
          case SafetyChoice.CAMERA:
            return [
              {
                id: "DingA1",
                eventRender: { Component: DingA1 },
                infoRender: null,
                next: ({ termsChoice }: GameState) => {
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
      next: ({ dnaTestChoice }: GameState) => {
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
      next: ({ angelTrendChoice }: GameState) => {
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
      next: ({ talkGPTChoice }: GameState) => {
        switch (talkGPTChoice) {
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
      next: ({ dnaTestChoice }: GameState) => {
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

  public next(state: GameState): GameEvent | null {
    if (this.current?.next !== undefined) {
      this.queue = [...this.current.next(state)!, ...this.queue];
    }
    if (this.queue.length > 0) {
      [this.current, ...this.queue] = this.queue;
      return this.current;
    } else {
      return null;
    }
  }
}
