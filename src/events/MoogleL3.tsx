import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export interface MoogleL2Props extends BaseEventProps {}

export function MoogleL3({ finish }: MoogleL2Props) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      Breaking News: Amid Moogle Layoffs, Angry Ex-Moogler Leaks Moogle Home Recordings
      </p>
      <p>
      Some of those recordings included your voice.
      </p>
    </div>
  );
}
