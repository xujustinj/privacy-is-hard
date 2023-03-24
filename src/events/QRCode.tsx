import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export function QRCode({ finish }: BaseEventProps) {
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
      You are shooting in a remote location and have 10 minutes to get a quick lunch during break time. There's a hip restaurant nearby, but it only has a QR code menu.
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Scan the QR code! It's so nice of the restaurant to save the trees and not print paper menus.
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        "dO you GUYs haVE a paPER meNU?"
      </button>
      {choice === true && <><p>Your IP address and location are given to the website providing the menu.</p>
      <p>You ordered and got your food within 10 minutes. You made it back on time. Nice!</p>
      </>}
      {choice === false && <><p>The waiter sighs and goes to the back to ask his manager. They don't, so he tells you all the options. It took a while, and now you're late. The movie director yells at you. </p></>}
      {choice !== null && (
        <>
        </>
      )}
    </div>
  );
}
