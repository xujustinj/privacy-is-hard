import { useCallback, useContext, useState } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export const enum TermsChoice {
  ACCEPT,
  DECLINE,
}

export function DingA1({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<TermsChoice | null>(null);
  const choose = useCallback(
    (choice: TermsChoice) => {
      state.termsChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );
  return (
    <>
      <p>
        You order a Ding video doorbell. When you go to set it up, it has you
        install an app. Do you agree to the Terms and Conditions?
        https://ring.com/ca/en/terms
      </p>
      <button
        onClick={() => choose(TermsChoice.ACCEPT)}
        disabled={choice !== null}
      >
        Accept and install
      </button>
      <button
        onClick={() => choose(TermsChoice.DECLINE)}
        disabled={choice !== null}
      >
        Decline
      </button>
      {choice === TermsChoice.DECLINE && (
        <>
          <p>You have to return the doorbell.</p>
          <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />
          <p>
            Your bodyguard was enjoying his sandwich when the stalker fan came
            back and stole the movie script.
          </p>
          <p>
            You alert the police, but no cameras caught his face, so the police
            was not able to find them. The stalker fan released the movie
            script. Yikes!
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={-20} />
        </>
      )}
    </>
  );
}