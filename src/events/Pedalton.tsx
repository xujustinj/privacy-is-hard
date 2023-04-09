import { atom, useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Choices } from "../components/Choices";
import { AddScore } from "../components/Score";
import { BaseEventProps } from "../model/Event";
import { ScoreCategory } from "../model/Score";

export const enum PedaltonChoice {
  YES,
  NO,
}

export const pedaltonChoiceState = atom<PedaltonChoice | null>({
  key: "pedaltonChoiceState",
  default: null,
});

export function Pedalton({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(pedaltonChoiceState);

  return (
    <>
      <p>
        Holidays are over, time to get fit again for the movie. Your friend
        recommended you to try your new Pedalton bike. Let's give it a try!
      </p>
      <p>You start working out everyday for 1 hour in your home studio.</p>
      <AddScore category={ScoreCategory.HEALTH} amount={10} />
      <p>
        During a workout, one of your fans saw your name on the Peloton
        leaderboard and sent you a virtual high five. Would you like to high
        five them back?
      </p>
      <Choices
        choices={[
          {
            choice: PedaltonChoice.YES,
            child: "Yeah!",
          },
          {
            choice: PedaltonChoice.NO,
            child: "No.",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === PedaltonChoice.YES && [
        <p>You have made a new friend!</p>,
        <AddScore category={ScoreCategory.SOCIAL} amount={5} />,
      ]}
      {choice === PedaltonChoice.NO && <p>Ok.</p>}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
