import { useCallback } from "react";
import { selector, useResetRecoilState } from "recoil";
import { DnaTestChoice, dnaTestChoiceState } from "../events/22andMe/Dna";
import {
  AngelTrendChoice,
  angelTrendChoiceState,
} from "../events/AngelTrend/AngelTrend";
import { BitFitChoice, bitFitChoiceState } from "../events/BitFit/BitFit";
import { CardiacChoice, cardiacChoiceState } from "../events/Cardiac/Cardiac";
import {
  CleanStreetChoice,
  cleanStreetChoiceState,
} from "../events/CleanStreet/CleanStreet";
import { PaymentChoice, paymentChoiceState } from "../events/CreditCash";
import { SafetyChoice, safetyChoiceState } from "../events/DingBell/Ding";
import { TermsChoice, termsChoiceState } from "../events/DingBell/DingA1";
import { PoliceChoice, policeChoiceState } from "../events/DingBell/DingAA3";
import { MoogleChoice, moogleChoiceState } from "../events/Moogle/Moogle";
import { PedaltonChoice, pedaltonChoiceState } from "../events/Pedalton";
import { PlankChoice, plankChoiceState } from "../events/PlankChallenge";
import { QRCodeChoice, qrCodeChoiceState } from "../events/QRCode";
import { TalkGPTChoice, talkGPTChoiceState } from "../events/TalkGPT/TalkGPT";
import { ScoreCategory, scoreStateFamily } from "./Score";

export interface GameState {
  angelTrendChoice: AngelTrendChoice | null;
  bitFitChoice: BitFitChoice | null;
  cardiacChoice: CardiacChoice | null;
  cleanStreetChoice: CleanStreetChoice | null;
  dnaTestChoice: DnaTestChoice | null;
  moogleChoice: MoogleChoice | null;
  paymentChoice: PaymentChoice | null;
  pedaltonChoice: PedaltonChoice | null;
  plankChoice: PlankChoice | null;
  policeChoice: PoliceChoice | null;
  qrCodeChoice: QRCodeChoice | null;
  safetyChoice: SafetyChoice | null;
  talkGPTChoice: TalkGPTChoice | null;
  termsChoice: TermsChoice | null;
  scores: ReadonlyMap<ScoreCategory, number>;
}

export const gameState = selector<GameState>({
  key: "gameState",
  get: ({ get }) => {
    return {
      angelTrendChoice: get(angelTrendChoiceState),
      bitFitChoice: get(bitFitChoiceState),
      cardiacChoice: get(cardiacChoiceState),
      cleanStreetChoice: get(cleanStreetChoiceState),
      dnaTestChoice: get(dnaTestChoiceState),
      moogleChoice: get(moogleChoiceState),
      paymentChoice: get(paymentChoiceState),
      pedaltonChoice: get(pedaltonChoiceState),
      plankChoice: get(plankChoiceState),
      policeChoice: get(policeChoiceState),
      qrCodeChoice: get(qrCodeChoiceState),
      safetyChoice: get(safetyChoiceState),
      talkGPTChoice: get(talkGPTChoiceState),
      termsChoice: get(termsChoiceState),
      scores: new Map(
        Object.values(ScoreCategory).map((category) => [
          category,
          get(scoreStateFamily(category)),
        ])
      ),
    } as const;
  },
});

export function useResetGameState() {
  const resetAngelTrendChoice = useResetRecoilState(angelTrendChoiceState);
  const resetBitFitChoice = useResetRecoilState(bitFitChoiceState);
  const resetCardiacChoice = useResetRecoilState(cardiacChoiceState);
  const resetCleanStreetChoice = useResetRecoilState(cleanStreetChoiceState);
  const resetDNATestChoice = useResetRecoilState(dnaTestChoiceState);
  const resetMoogleChoice = useResetRecoilState(moogleChoiceState);
  const resetPaymentChoice = useResetRecoilState(paymentChoiceState);
  const resetPedaltonChoice = useResetRecoilState(pedaltonChoiceState);
  const resetPlankChoice = useResetRecoilState(plankChoiceState);
  const resetPoliceChoice = useResetRecoilState(policeChoiceState);
  const resetQRCodeChoice = useResetRecoilState(qrCodeChoiceState);
  const resetSafetyChoice = useResetRecoilState(safetyChoiceState);
  const resetTalkGPTChoice = useResetRecoilState(talkGPTChoiceState);
  const resetTermsChoice = useResetRecoilState(termsChoiceState);
  const resetPrivacyScore = useResetRecoilState(
    scoreStateFamily(ScoreCategory.PRIVACY)
  );
  const resetCareerScore = useResetRecoilState(
    scoreStateFamily(ScoreCategory.CAREER)
  );
  const resetHealthScore = useResetRecoilState(
    scoreStateFamily(ScoreCategory.HEALTH)
  );
  const resetSocialScore = useResetRecoilState(
    scoreStateFamily(ScoreCategory.SOCIAL)
  );
  const resetHappinessScore = useResetRecoilState(
    scoreStateFamily(ScoreCategory.HAPPINESS)
  );

  return useCallback(() => {
    resetAngelTrendChoice();
    resetBitFitChoice();
    resetCardiacChoice();
    resetCleanStreetChoice();
    resetDNATestChoice();
    resetMoogleChoice();
    resetPaymentChoice();
    resetPedaltonChoice();
    resetPlankChoice();
    resetPoliceChoice();
    resetQRCodeChoice();
    resetSafetyChoice();
    resetTalkGPTChoice();
    resetTermsChoice();
    resetPrivacyScore();
    resetCareerScore();
    resetHealthScore();
    resetSocialScore();
    resetHappinessScore();
  }, [
    resetAngelTrendChoice,
    resetBitFitChoice,
    resetCardiacChoice,
    resetCareerScore,
    resetCleanStreetChoice,
    resetDNATestChoice,
    resetHappinessScore,
    resetHealthScore,
    resetMoogleChoice,
    resetPaymentChoice,
    resetPedaltonChoice,
    resetPlankChoice,
    resetPoliceChoice,
    resetPrivacyScore,
    resetQRCodeChoice,
    resetSafetyChoice,
    resetSocialScore,
    resetTalkGPTChoice,
    resetTermsChoice,
  ]);
}
