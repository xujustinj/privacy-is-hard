import { useCallback, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { GeneratorStateContext } from "../../components/Generator";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export const enum DnaTestChoice {
  YES,
  NO,
}

export function TwentyTwoandMe({ onNext }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<DnaTestChoice | null>(null);
  const choose = useCallback(
    (choice: DnaTestChoice) => {
      state.dnaTestChoice = choice;
      setChoice(choice);
    },
    [state, setChoice]
  );
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
        onChoose={choose}
      ></Choices>
      {choice === DnaTestChoice.NO && [
        <p>
          Your aunt Barbara is offended. Why are you ruining the holiday spirit?
          The rest of the family will be taking it anyway.
        </p>,
        <AddScore category={ScoreCategory.SOCIAL} amount={-10} />,
        <p>Your family has some Irish DNA, cool!</p>,
      ]}
      {choice === DnaTestChoice.YES && [
        <p>Your family has some Irish DNA, cool!</p>,
        <AddScore category={ScoreCategory.SOCIAL} amount={5} />,
      ]}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
