import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore, ScoreCategory } from "../../components/Score";
import { TalkGPTInfo } from "../../info/TalkGPTInfo";
import { BaseEventProps } from "../../model/Event";

export function TalkGPTA2({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: TalkGPTInfo }}>
        <p>
          Some genius prompt-engineered a model inversion attack against your
          chatbot. Now Reddit has screenshots of "you" revealing embarrassing
          things about you and your friends!
        </p>
        <p>Your friends are not impressed.</p>
        <AddScore category={ScoreCategory.SOCIAL} amount={-10} />
        <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
