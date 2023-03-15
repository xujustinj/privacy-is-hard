import { useCallback, useContext, useState } from "react";
import { ScoreCategory, ScoresContext } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export interface InteractiveProps extends BaseEventProps {
  message: string;
}

export function Interactive({ finish, message }: InteractiveProps) {
  const [timesClicked, setTimesClicked] = useState(0);
  const addScore = useContext(ScoresContext)[1];
  const click = useCallback(() => {
    setTimesClicked(timesClicked + 1);
    addScore(ScoreCategory.PRIVACY, -1);
    finish();
  }, [timesClicked, setTimesClicked, addScore, finish]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={click}>
        This button has been clicked {timesClicked} times.
      </button>
    </div>
  );
}
