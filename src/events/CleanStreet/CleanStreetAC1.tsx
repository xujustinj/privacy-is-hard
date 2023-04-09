import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore } from "../../components/Score";
import { CleanStreetInfo } from "../../info/CleanStreetInfo";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function CleanStreetAC1({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: CleanStreetInfo }}>
        <p>
          Some people from your city recognize a grocery store that appears in
          the background of your video. Your fans now know which neighbourhood
          you live in!
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
