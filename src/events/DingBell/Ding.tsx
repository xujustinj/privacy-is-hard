import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { BaseEventProps } from "../../model/Event";

export const enum SafetyChoice {
  CAMERA,
  BODYGUARD,
}

export const safetyChoiceState = atom<SafetyChoice | null>({
  key: "safetyChoiceState",
  default: null,
});

export function Ding({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(safetyChoiceState);

  return (
    <>
      <p>
        Uh oh... Your house was almost broken into by a stalker fan. Luckily,
        your bodyguard stopped him right on time. Would you like to install a
        Ding video doorbell for security?
      </p>
      <Choices
        choices={[
          {
            choice: SafetyChoice.CAMERA,
            child: "Install it. Better safe than sorry!",
          },
          {
            choice: SafetyChoice.BODYGUARD,
            child: "No, my bodyguard is the best!",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === SafetyChoice.CAMERA && (
        <p>You order a Ding video doorbell.</p>
      )}
      {choice === SafetyChoice.BODYGUARD && (
        <p>You give your bodyguard a bonus for his exceptional work.</p>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
