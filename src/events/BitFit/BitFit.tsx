import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { BaseEventProps } from "../../model/Event";

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
        found you a personal trainer.
      </p>
      <p>
        The trainer wants you to wear a BitFit watch to see your activity
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
      {choice === BitFitChoice.NO && (
        <p>
          Your personal trainer is unhappy. Now they have to change the training
          plan!
        </p>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
