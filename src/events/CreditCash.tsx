import { useCallback, useState } from "react";
import { AddScore, ScoreCategory, SubScore } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export function CreditCash({ finish }: BaseEventProps) {
  const [isClicked, setIsClicked] = useState(false);
  const click = useCallback(() => {
    setIsClicked(true);
    finish();
  }, [setIsClicked, finish]);

  return (
    <div>
      <p>
        On a pit stop to WcDonald's, you get two number 9s, a number 9 large, a
        number 6 with extra dip, a number 7, two number 45s, one with cheese,
        and a large soda. How would you like to pay?
      </p>
      <button onClick={click} disabled={isClicked}>
        Credit Card
      </button>
      <button onClick={click} disabled={isClicked}>
        Cash
      </button>
      {isClicked && (
        <>
          <p>Thank you. Your order will be ready at the next window.</p>
          <AddScore category={ScoreCategory.HAPPINESS} amount={10} />
          <SubScore category={ScoreCategory.HEALTH} amount={5} />
        </>
      )}
    </div>
  );
}
