import { useCallback, useContext, useState } from "react";
import { BaseEventProps } from ".././BaseEvent";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory } from "../../game/Score";

export const enum TalkGPTChoice {
  YES,
  NO,
}

export function TalkGPT({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<TalkGPTChoice | null>(() => null);
  const choose = useCallback(
    (choice: TalkGPTChoice) => {
      state.talkgptChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );
  return (
    <div>
      <p>
        A startup is building a fun app for fans to chat with their favourite
        celebrities, based on TalkGPT. They contacted your managers to ask for a
        few thousand sample text messages so they can train a chatbot to mimic
        your style. They are willing to pay good money.
      </p>
      <button onClick={() => choose(TalkGPTChoice.YES)} disabled={choice !== null}>
        All aboard the bandwagon!
      </button>
      <button onClick={() => choose(TalkGPTChoice.NO)} disabled={choice !== null}>
        No, you can't use my texts!
      </button>
      {choice === TalkGPTChoice.YES && (
        <p>You provide some messages.</p>
      )}
      {choice === TalkGPTChoice.NO && (
        <>
          <p>
            Your managers are disappointed that you turned down easy money. What a spoilsport!
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={-5} />
        </>
      )}
    </div>
  );
}
