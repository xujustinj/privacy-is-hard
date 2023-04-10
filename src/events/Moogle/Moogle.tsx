import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { BaseEventProps } from "../../model/Event";

export const enum MoogleChoice {
  YES,
  NO,
}

export const moogleChoiceState = atom<MoogleChoice | null>({
  key: "moogleChoiceState",
  default: null,
});

export function Moogle({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(moogleChoiceState);

  return (
    <>
      <p>
        There's just so much to do everyday! Auditions, rehearsals, acting
        classes, voice lessons, performing, networking, gym, groceries, friends,
        family... Did I say gym yet?
      </p>
      <p>
        Your manager suggested you should start using Moogle Calendar, and get a
        matching Moogle Home voice assistant too. He says it'll make it easier
        to keep track of these things.
      </p>
      <Choices
        choices={[
          {
            choice: MoogleChoice.YES,
            child: "Yeah, it's time to get my life together.",
          },
          {
            choice: MoogleChoice.NO,
            child: "It's ok, I'll keep doing what I'm already doing.",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === MoogleChoice.YES && (
        <p>
          You buy a Moogle Home and add everything on your to-do list to Moogle
          Calendar.
        </p>
      )}
      {choice === MoogleChoice.NO && (
        <p>
          You politely decline and promise your manager that you'll figure out
          your own way.
        </p>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
