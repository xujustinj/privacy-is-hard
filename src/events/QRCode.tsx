import { useCallback, useState } from "react";
import { BaseEventProps } from "./BaseEvent";
import { AddScore, ScoreCategory } from "../game/Score";

export const enum QRCodeChoice {
  YES,
  NO,
}

export function QRCode({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<QRCodeChoice | null>(() => null);
  const choose = useCallback(
    (newChoice: QRCodeChoice) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );

  return (
    <div>
      <p>
        You are shooting in a remote location and have 10 minutes to get a quick
        lunch during break time. There's a hip restaurant nearby, but it only
        has a QR code menu.
      </p>
      <button onClick={() => choose(QRCodeChoice.YES)} disabled={choice !== null}>
        Scan the QR code! It's so nice of the restaurant to save the trees and
        not print paper menus.
      </button>
      <button onClick={() => choose(QRCodeChoice.NO)} disabled={choice !== null}>
        "dO you GUYs haVE a paPER meNU?"
      </button>
      {choice === QRCodeChoice.YES && (
        <>
          <p>
            Your IP address and location are given to the website providing the
            menu.
          </p>
          <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
          <p>
            You ordered and got your food within 10 minutes. You made it back on
            time. Nice!
          </p>
        </>
      )}
      {choice === QRCodeChoice.NO && (
        <>
          <p>
            The waiter sighs and goes to the back to ask his manager. They
            don't, so he tells you all the options. It took a while, and now
            you're late. The movie director yells at you.{" "}
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={-5} />
          <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />
        </>
      )}
    </div>
  );
}
