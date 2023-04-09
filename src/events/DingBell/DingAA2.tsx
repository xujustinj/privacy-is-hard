import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore, ScoreCategory } from "../../components/Score";
import { DingInfo1 } from "../../info/DingInfo1";
import { BaseEventProps } from "../../model/Event";

export function DingAA2({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: DingInfo1 }}>
        <p>
          To your surprise, Babazon used a video of you on your front porch in a
          new Ding adversitement on InstaTok. What?
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
