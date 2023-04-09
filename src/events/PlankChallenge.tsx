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
        Trend of the month: the plank challenge is taking over the pages of
        YouSnapstatok's influencers! In the trend, an influencer reads out the
        names of random followers while holding a plank for as long as they can.
      </p>
      <Choices
        choices={[
          {
            choice: PlankChoice.YES,
            child: "Do the plank!",
          },
          {
            choice: PlankChoice.NO,
            child: "Naw, I'll pass",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === PlankChoice.YES && [
        <p>
          Your plank goes on for 5 minutes! Your fans compliment your amazing
          physical fitness.
        </p>,
        <AddScore category={ScoreCategory.CAREER} amount={5} />,
        <AddScore category={ScoreCategory.HAPPINESS} amount={5} />,
      ]}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
