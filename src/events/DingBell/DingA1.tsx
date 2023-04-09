import { useCallback, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { GeneratorStateContext } from "../../components/Generator";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export const enum TermsChoice {
  ACCEPT,
  DECLINE,
}

export function DingA1({ onNext }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<TermsChoice | null>(null);
  const choose = useCallback(
    (choice: TermsChoice) => {
      state.termsChoice = choice;
      setChoice(choice);
    },
    [state, setChoice]
  );
  return (
    <>
      <p>
        You order a Ding video doorbell. When you go to set it up, it has you
        install an app. Do you agree to the{" "}
        <a href="https://ring.com/ca/en/terms">Terms and Conditions</a>?
      </p>
      <Choices
        choices={[
          {
            choice: TermsChoice.ACCEPT,
            child: "Accept and Install",
          },
          {
            choice: TermsChoice.DECLINE,
            child: "Decline",
          },
        ]}
        chosen={choice}
        onChoose={choose}
      />
      {choice === TermsChoice.DECLINE && [
        <p>You have to return the doorbell.</p>,
        <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />,
        <p>
          Your bodyguard was enjoying his sandwich when the stalker fan came
          back and stole the movie script.
        </p>,
        <p>
          You alert the police, but no cameras caught his face, so the police
          was not able to find them. The stalker fan released the movie script.
          Yikes!
        </p>,
        <AddScore category={ScoreCategory.CAREER} amount={-20} />,
      ]}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
