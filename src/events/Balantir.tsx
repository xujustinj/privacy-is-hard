import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export interface BalantirProps extends BaseEventProps {}

export function Balantir({ finish }: BalantirProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    state.balantir = true;
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        The Regional Health Service gave everyone's health data to an AI company
        called Balantir.
      </p>
      <p>
        Balantir will train models to make the health system more efficient, but
        who can say for sure?
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={5} />
      <SubScore category={ScoreCategory.PRIVACY} amount={5} />
    </div>
  );
}
