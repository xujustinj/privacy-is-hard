import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum TermsChoice {
  ACCEPT,
  DECLINE,
}

export const termsChoiceState = atom<TermsChoice | null>({
  key: "termsChoiceState",
  default: null,
});

const Link = styled.a`
  color: inherit;
  font-weight: bold;
`;

export function DingA1({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(termsChoiceState);

  return (
    <>
      <p>
        Your Ding video doorbell has arrived! When you go to set it up, it has
        you install an app. Do you agree to the{" "}
        <Link
          href="https://ring.com/ca/en/terms"
          target="_blank"
          rel="noreferrer"
        >
          Terms and Conditions
        </Link>
        ?
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
      {choice === TermsChoice.ACCEPT && (
        <p>
          The doorbell connects to your phone seamlessly. You feel safer
          already!
        </p>
      )}
      {choice === TermsChoice.DECLINE && (
        <>
          <p>You have to return the doorbell.</p>
          <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />
        </>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
