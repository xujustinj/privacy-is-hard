import { useCallback, useContext, useState } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export const enum CardiacChoice {
  YES,
  NO,
}

export function Cardiac({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<CardiacChoice | null>(null);
  const choose = useCallback(
    (choice: CardiacChoice) => {
      state.cardiacChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );
  return (
    <div>
      <p>
      The stress from going on tour has made your cardiac arrythmia act up again. Your current meds are not working as effectively. Unfortunately, you are far away from your doctor, so the only way to reach her is by telemedicine.
      </p>
      <button onClick={() => choose(CardiacChoice.YES)} disabled={choice !== null}>
        I'll wait until I'm back from tour.
      </button>
      <button onClick={() => choose(CardiacChoice.NO)} disabled={choice !== null}>
        I'll use the Cardiac telehealth platform to meet with my doctor virtually.
      </button>
      {choice === CardiacChoice.YES && (
        <p>You stick it out for the rest of the tour. Your heart palpitations cause you to lose sleep on some nights, impacting your ability to perform. Some of your pickiest fans are disappointed.</p>
      )}
      {choice === CardiacChoice.NO && (
        <><p>Your doctor recommends changes to your dosage and life habits that help you get back to normal within a week. </p></>
      )}
    </div>
  );
}
