import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { BaseEventProps } from "./BaseEvent";
import { ScoreCategory, ScoresContext } from "../game/Score";

export interface BalantirProps extends BaseEventProps {}

export function Balantir({ finish }: BalantirProps) {
  const state = useContext(GeneratorStateContext);
  const addScores = useContext(ScoresContext)[1];
  useEffect(() => {
    state.balantir = true;
    addScores(
      new Map([
        [ScoreCategory.HAPPINESS, 10],
        [ScoreCategory.HEALTH, -5],
      ])
    );
    finish();
  }, [finish]);

  return (
    <div>
      <p>The Regional Health Service gave everyone's health data to an AI company called Balantir.</p>
      <p>
      Balantir will train models to make the health system more efficient, but who can say for sure?
      </p>
    </div>
  );
}
