import { useCallback, useContext, useState } from "react";
import { ScoreCategory, ScoresContext } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";
import { GeneratorStateContext } from "../../game/Generator";

export function CreditCashInteractive({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [isClicked, setIsClicked] = useState(false);
  const addScores = useContext(ScoresContext)[1];
  const click = useCallback(() => {
    setIsClicked(true);
    addScores(
      new Map([
        [ScoreCategory.HAPPINESS, 10],
        [ScoreCategory.HEALTH, -5],
      ])
    );
    finish();
  }, [isClicked, setIsClicked, addScores, finish, state]);

  return (
    <div>
      <p>On a pit stop to WcDonald's, you get two number 9s, a number 9 large,
        a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda. How would you like to pay?</p>
      <button onClick={click} disabled={isClicked}>
        Credit Card
      </button>
      <button onClick={click} disabled={isClicked}>
        Cash
      </button>
      {isClicked && <p>Thank you. Your order will be ready at the next window.</p>}
    </div>
  );
}
