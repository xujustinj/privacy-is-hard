import { useCallback, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { GeneratorStateContext } from "../../components/Generator";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export const enum AngelTrendChoice {
  YES,
  NO,
}

export function AngelTrend({ onNext }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<AngelTrendChoice | null>(null);
  const choose = useCallback(
    (choice: AngelTrendChoice) => {
      state.angelTrendChoice = choice;
      setChoice(choice);
    },
    [state, setChoice]
  );
  return (
    <>
      <p>
        A new trend is on the rise: The angel trend is taking over the pages of
        InstaTok's influencers! In the trend, a person takes a low angle shot of
        themselves nude and dancing elegantly in front of a bright blue sky, and
        adds a filter to make themselves appear like a white silhouette. Getting
        on the trend would be a perfect way to show off your contemporary dance
        skills!
      </p>
      <Choices
        choices={[
          { choice: AngelTrendChoice.YES, child: "Do the Angel trend!" },
          { choice: AngelTrendChoice.NO, child: "Naw, I'll pass." },
        ]}
        chosen={choice}
        onChoose={choose}
      />
      {choice === AngelTrendChoice.YES && [
        <p>Your video goes viral, earning you a million new followers!</p>,
        <AddScore category={ScoreCategory.CAREER} amount={5} />,
      ]}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
