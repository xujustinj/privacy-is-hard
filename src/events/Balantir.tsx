import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export interface BalantirProps extends BaseEventProps {}

export function Balantir({ finish }: BalantirProps) {
  useEffect(finish, [finish]);

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
      <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
    </div>
  );
}
