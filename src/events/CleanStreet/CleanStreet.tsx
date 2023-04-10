import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum CleanStreetChoice {
  CLEAN,
  DONATION,
  BOTH,
}

export const cleanStreetChoiceState = atom<CleanStreetChoice | null>({
  key: "cleanStreetChoiceState",
  default: null,
});

export function CleanStreet({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(cleanStreetChoiceState);

  return (
    <>
      <p>
        The Clean Streets challenge is taking over InstaTok! Influencers are
        filming themselves collecting litter off the streets in their
        neighbourhood while asking strangers for donations in support of the
        families who lost loved ones in the apartment collapse. They then
        challenge others to do the same or make a personal donation.
      </p>
      <p>You've just been challenged by a fellow celebrity!</p>
      <Choices
        choices={[
          {
            choice: CleanStreetChoice.CLEAN,
            child: "Clean the streets!",
          },
          {
            choice: CleanStreetChoice.DONATION,
            child: "Make a personal donation.",
          },
          {
            choice: CleanStreetChoice.BOTH,
            child: "Why not both?",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === CleanStreetChoice.CLEAN && (
        <>
          <p>
            Many fans praise your efforts, and you gain a few thousand
            followers.
          </p>
          <p>
            A small vocal group of haters accuse you of using the misfortune of
            others to gain influence (which is technically true), but most
            netizens dismiss them.
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={5} />
        </>
      )}
      {choice === CleanStreetChoice.DONATION && (
        <p>
          You give $100,000, more money than anyone before. But barely anyone
          notices and people wonder why you haven't posted a video.
        </p>
      )}
      {choice === CleanStreetChoice.BOTH && (
        <>
          <p>
            Above and beyond! You gain huge respect from your fans and even the
            most hardline haters admit you can have class... sometimes.
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={10} />
        </>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
