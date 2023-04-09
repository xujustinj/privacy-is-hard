import { Button } from "../components/Button";
import { InfoProvider } from "../components/InfoPanel";
import { AddScore } from "../components/Score";
import { BalantirInfo } from "../info/BalantirInfo";
import { BaseEventProps } from "../model/Event";
import { ScoreCategory } from "../model/Score";

export interface BalantirProps extends BaseEventProps {}

export function Balantir({ onNext }: BalantirProps) {
  return (
    <>
      <InfoProvider info={{ Component: BalantirInfo }}>
        <p>
          The Regional Health Service gave everyone's health data to an AI
          company called Balantir.
        </p>
        <p>
          Balantir will train models to make the health system more efficient,
          but who can say for sure?
        </p>
        <AddScore category={ScoreCategory.HEALTH} amount={5} />
        <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
