import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export function AngelTrend({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<boolean | null>(() => null);
  const choose = useCallback((newChoice: boolean) => {
    setChoice(newChoice);
    finish();
  }, [setChoice, finish]);
  return <div>
    <p>
    A new trend is on the rise: The angel trend is taking over the pages of InstaTok's influencers! In the trend, a person takes a low angle shot of themselves nude and dancing elegantly in front of a bright blue sky, and adds a filter to make themselves appear like a white silhouette. Getting on the trend would be a perfect way to show off your contemporary dance skills!
    </p>
    <button onClick={() => choose(true)} disabled={choice !== null}>
      Do the Angel trend!
    </button>
    <button onClick={() => choose(false)} disabled={choice !== null}>
      Naw, I'll pass.
    </button>
    {choice === true && <p>Your video goes viral, earning you a million new followers!</p>}
    {choice === false && <></>}
    {choice !== null && (
      <>
        {choice && <AddScore category={ScoreCategory.CAREER} amount={5} />}
      </>
    )}
  </div>
}
