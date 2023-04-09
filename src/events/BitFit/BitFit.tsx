import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum BitFitChoice {
  YES,
  NO,
}

export const bitFitChoiceState = atom<BitFitChoice | null>({
  key: "bitFitChoiceState",
  default: null,
});

export function BitFit({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(bitFitChoiceState);

  return (
    <>
      <p>
        You are booked for a new film! To get ready for the role, your manager
        finds you a personal trainer for the gym. Your new personal trainer
        would like you to start wearing a BitFit watch to see your activity
        levels.
      </p>
      <Choices
        choices={[
          { choice: BitFitChoice.YES, child: "Yeah, no problem!" },
          { choice: BitFitChoice.NO, child: "I would rather not." },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === BitFitChoice.YES && (
        <p>
          You purchase a BitFit watch and wear it as you go about daily life.
        </p>
      )}
      {choice === BitFitChoice.NO && [
        <p>
          Your personal trainer is unhappy. Now they have to re-do the entire
          training plan!
        </p>,
        <p>
          Word gets out about your "feud" with your personal trainer. Tabloids
          have already published an article - '11 Celebrities Who Need A Serious
          Attitude Adjustment' - and you're #1.
        </p>,
        <AddScore category={ScoreCategory.CAREER} amount={-10} />,
      ]}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
