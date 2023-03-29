import { useCallback, useContext, useState } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export const enum CleanStreetChoice {
  CLEAN,
  DONATION,
  BOTH,
}

export function CleanStreet({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<CleanStreetChoice | null>(null);
  const choose = useCallback(
    (choice: CleanStreetChoice) => {
      state.cleanStreetChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );
  return (
    <div>
      <p>
        Trend of the month: the Clean Streets challenge is taking over the pages
        of InstaTok's influencers! Influencers are filming themselves collecting
        litter off the streets in their neighbourhood while asking strangers for
        donations in support of the families who lost loved ones in the L.A.
        apartment collapse. They then challenge others to do the same or make a
        personal donation. You've just been challenged by a fellow celebrity!
      </p>
      <button
        onClick={() => choose(CleanStreetChoice.CLEAN)}
        disabled={choice !== null}
      >
        Clean the streets!
      </button>
      <button
        onClick={() => choose(CleanStreetChoice.DONATION)}
        disabled={choice !== null}
      >
        I'll just make a personal donation.
      </button>
      <button
        onClick={() => choose(CleanStreetChoice.BOTH)}
        disabled={choice !== null}
      >
        I'll do one better: clean the streets and make a personal donation!
      </button>
      {choice === CleanStreetChoice.CLEAN && (
        <>
          <p>
            Many fans praise your efforts, and you gain a few thousand
            followers. A small vocal group of haters accuse you of using the
            misfortune of others to gain influence (which you technically are).
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={5} />
        </>
      )}
      {choice === CleanStreetChoice.DONATION && (
        <>
          <p>
            You give $100 000, more money than anyone before. But barely anyone
            notices and people wonder why you haven't posted a video.
          </p>
        </>
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
    </div>
  );
}
