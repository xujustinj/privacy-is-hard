import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum DnaTestChoice {
  YES,
  NO,
}

export const dnaTestChoiceState = atom<DnaTestChoice | null>({
  key: "dnaTestChoiceState",
  default: null,
});

export function TwentyTwoandMe({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(dnaTestChoiceState);

  return (
    <>
      <p>
        It's Christmas! You are hosting a party with your friends and family.
        For some holiday fun, your aunt Barbara has gifted 22andMe DNA testing
        kits to the entire family.
      </p>
      <Choices
        choices={[
          { choice: DnaTestChoice.NO, child: "I'll pass, thanks." },
          {
            choice: DnaTestChoice.YES,
            child: "Yeah, why not! I'll join in the fun too!",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      ></Choices>
      {choice === DnaTestChoice.NO && (
        <>
          <p>
            Your aunt Barbara is offended. Why are you ruining the holiday
            spirit? The rest of the family will be taking it anyway.
          </p>
          <AddScore category={ScoreCategory.SOCIAL} amount={-10} />
        </>
      )}
      {choice === DnaTestChoice.YES && (
        <>
          <p>
            That's the spirit! You collect a saliva sample using the kit and
            mail it to 22andMe with your family.
          </p>
          <AddScore category={ScoreCategory.SOCIAL} amount={5} />
        </>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
