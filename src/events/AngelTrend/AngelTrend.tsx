import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum AngelTrendChoice {
  YES,
  NO,
}

export const angelTrendChoiceState = atom<AngelTrendChoice | null>({
  key: "angelTrendChoiceState",
  default: null,
});

export function AngelTrend({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(angelTrendChoiceState);

  return (
    <>
      <p>
        The Angel Trend is taking over InstaTok! In the trend, a person takes a
        low angle shot of themselves nude and dancing elegantly in front of a
        bright blue sky, and adds a filter to make themselves appear like a
        white silhouette.
      </p>
      <p>
        Getting on the trend would be a perfect way to show off your
        contemporary dance skills!
      </p>
      <Choices
        choices={[
          { choice: AngelTrendChoice.YES, child: "Do the Angel trend!" },
          { choice: AngelTrendChoice.NO, child: "Naw, I'll pass." },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === AngelTrendChoice.YES && (
        <>
          <p>Your video goes viral, earning you a million new followers!</p>
          <AddScore category={ScoreCategory.CAREER} amount={5} />
        </>
      )}
      {choice === AngelTrendChoice.NO && (
        <p>
          Some fans wonder why you haven't posted anything, but they assume you
          must be busy with other things.
        </p>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
