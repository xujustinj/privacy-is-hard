import { atom, useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Choices } from "../components/Choices";
import { AddScore } from "../components/Score";
import { BaseEventProps } from "../model/Event";
import { ScoreCategory } from "../model/Score";

export const enum PlankChoice {
  YES,
  NO,
}

export const plankChoiceState = atom<PlankChoice | null>({
  key: "plankChoiceState",
  default: null,
});

export function PlankChallenge({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(plankChoiceState);

  return (
    <>
      <p>
        The Plank Challenge is taking over InstaTok! In the trend, an influencer
        reads out the names of random followers while holding a plank for as
        long as they can.
      </p>
      <Choices
        choices={[
          {
            choice: PlankChoice.YES,
            child: "Do the plank!",
          },
          {
            choice: PlankChoice.NO,
            child: "Naw, I'll pass.",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === PlankChoice.YES && (
        <>
          <p>
            Your plank goes on for 5 minutes! Your fans compliment your amazing
            physical fitness.
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={5} />
          <AddScore category={ScoreCategory.HAPPINESS} amount={5} />
        </>
      )}
      {choice === PlankChoice.NO && (
        <p>
          Some fans wonder why you haven't posted anything, but they assume you
          must be busy with other things.
        </p>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
