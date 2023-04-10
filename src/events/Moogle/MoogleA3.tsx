import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore } from "../../components/Score";
import { MoogleA3Info } from "../../info/MoogleA3Info";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function MoogleA3({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: MoogleA3Info }}>
        <p>
          <b>Breaking News</b>: Amid Layoffs, Angry Moogler Leaks Moogle Home
          Recordings
        </p>
        <p>Some of those recordings included your voice.</p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
