import { useCallback, useContext, useState } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export const enum BitFitChoice {
  YES,
  NO,
}

export function BitFit({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<BitFitChoice | null>(null);
  const choose = useCallback(
    (choice: BitFitChoice) => {
      state.bitFitChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );

  return (
    <>
      <p>
        You are booked for a new film! To get ready for the role, your manager
        finds you a personal trainer for the gym. Your new personal trainer
        would like you to start wearing a BitFit watch to see your activity
        levels.
      </p>
      <button
        onClick={() => choose(BitFitChoice.YES)}
        disabled={choice !== null}
      >
        Yeah, no problem!
      </button>
      <button
        onClick={() => choose(BitFitChoice.NO)}
        disabled={choice !== null}
      >
        I would rather not.
      </button>
      {choice === BitFitChoice.YES && (
        <>
          <p>
            You purchase a BitFit watch and wear it as you go about daily life.
          </p>
        </>
      )}
      {choice === BitFitChoice.NO && (
        <>
          <p>
            Your personal trainer is unhappy. Now they have to re-do the entire
            training plan!
          </p>
          <p>
            Word gets out about your "feud" with your personal trainer. Tabloids
            have already published an article - '11 Celebrities Who Need A
            Serious Attitude Adjustment' - and you're #1.
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={-10} />
        </>
      )}
    </>
  );
}
