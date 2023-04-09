import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum CardiacChoice {
  YES,
  NO,
}

export const cardiacChoiceState = atom<CardiacChoice | null>({
  key: "cardiacChoiceState",
  default: null,
});

export function Cardiac({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(cardiacChoiceState);

  return (
    <>
      <p>
        The stress from going on tour has made your cardiac arrythmia act up
        again. Your current meds are not working as effectively. Unfortunately,
        you are far away from your doctor, so the only way to reach her is by
        telemedicine.
      </p>
      <Choices
        choices={[
          {
            choice: CardiacChoice.NO,
            child: "I'll wait until I'm back from tour.",
          },
          {
            choice: CardiacChoice.YES,
            child:
              "I'll use the Cardiac telehealth platform to meet with my doctor virtually.",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === CardiacChoice.NO && (
        <>
          <p>
            You stick it out for the rest of the tour. Your heart palpitations
            cause you to lose sleep on some nights, impacting your ability to
            perform. Some of your pickiest fans are disappointed.
          </p>
          <AddScore category={ScoreCategory.HEALTH} amount={-10} />
          <AddScore category={ScoreCategory.CAREER} amount={-10} />
        </>
      )}
      {choice === CardiacChoice.YES && (
        <>
          <p>
            Your doctor recommends changes to your dosage and life habits that
            help you get back to normal within a week.
          </p>
          <AddScore category={ScoreCategory.HEALTH} amount={5} />
        </>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
