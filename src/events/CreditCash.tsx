import { useCallback, useState } from "react";
import { Choices } from "../game/Choices";
import { InfoProvider } from "../game/InfoPanel";
import { AddScore, ScoreCategory } from "../game/Score";
import { CreditCashInfo } from "../info/CreditCashInfo";
import { BaseEventProps } from "./BaseEvent";

export const enum PaymentChoice {
  CREDIT,
  CASH,
}

export function CreditCash({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<PaymentChoice | null>(() => null);
  const choose = useCallback(
    (newChoice: PaymentChoice) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );

  return (
    <div>
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
        onChoose={choose}
      />
      {(choice === PaymentChoice.CASH || choice === PaymentChoice.CREDIT) && (
        <InfoProvider info={{ Component: CreditCashInfo }}>
          <p>Thank you! Your order will be ready at the next window.</p>
          <AddScore category={ScoreCategory.HAPPINESS} amount={10} />
          <AddScore category={ScoreCategory.HEALTH} amount={-5} />
        </InfoProvider>
      )}
    </div>
  );
}
