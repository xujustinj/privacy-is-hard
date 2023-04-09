import { atom, useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Choices } from "../components/Choices";
import { InfoProvider } from "../components/InfoPanel";
import { AddScore } from "../components/Score";
import { CreditCashInfo } from "../info/CreditCashInfo";
import { BaseEventProps } from "../model/Event";
import { ScoreCategory } from "../model/Score";

export const enum PaymentChoice {
  CREDIT,
  CASH,
}

export const paymentChoiceState = atom<PaymentChoice | null>({
  key: "paymentChoiceState",
  default: null,
});

export function CreditCash({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(paymentChoiceState);

  return (
    <>
      <p>
        On a pit stop to WcDonald's, you get two number 9s, a number 9 large, a
        number 6 with extra dip, a number 7, two number 45s, one with cheese,
        and a large soda. How would you like to pay?
      </p>
      <Choices
        choices={[
          {
            choice: PaymentChoice.CREDIT,
            child: "Credit Card",
          },
          {
            choice: PaymentChoice.CASH,
            child: "Cash",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {(choice === PaymentChoice.CASH || choice === PaymentChoice.CREDIT) && (
        <InfoProvider info={{ Component: CreditCashInfo }}>
          <p>Thank you! Your order will be ready at the next window.</p>
          <AddScore category={ScoreCategory.HAPPINESS} amount={10} />
          <AddScore category={ScoreCategory.HEALTH} amount={-5} />
        </InfoProvider>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
