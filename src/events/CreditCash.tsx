import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
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
      <button
        onClick={() => choose(PaymentChoice.CREDIT)}
        disabled={choice !== null}
      >
        Credit Card
      </button>
      <button
        onClick={() => choose(PaymentChoice.CASH)}
        disabled={choice !== null}
      >
        Cash
      </button>
      {(choice === PaymentChoice.CASH || choice === PaymentChoice.CREDIT) && (
        <>
          <p>Thank you! Your order will be ready at the next window.</p>
          <AddScore category={ScoreCategory.HAPPINESS} amount={10} />
          <AddScore category={ScoreCategory.HEALTH} amount={-5} />
        </>
      )}
    </div>
  );
}
