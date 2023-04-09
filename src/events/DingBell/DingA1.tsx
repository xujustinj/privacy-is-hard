import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export const enum TermsChoice {
  ACCEPT,
  DECLINE,
}

export const termsChoiceState = atom<TermsChoice | null>({
  key: "termsChoiceState",
  default: null,
});

export function DingA1({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(termsChoiceState);

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
        onChoose={setChoice}
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
