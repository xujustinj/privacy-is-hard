import { useCallback, useState } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function TalkGPT({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<boolean | null>(() => null);
  const choose = useCallback(
    (newChoice: boolean) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );
  return (
    <div>
      <p>
        A startup is building a fun app for fans to chat with their favourite
        celebrities, based on TalkGPT. They contacted your managers to ask for a
        few thousand sample text messages so they can train a chatbot to mimic
        your style. They are willing to pay good money.
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        All aboard the bandwagon!
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        No, you can't use my texts!
      </button>
      {choice === true && <p>You provide some messages.</p>}
      {choice === false && (
        <>
          <p>
            Your managers are disappointed that you turned down easy money. What
            a spoilsport!
          </p>
        </>
      )}
      {choice !== null && <></>}
    </div>
  );
}
