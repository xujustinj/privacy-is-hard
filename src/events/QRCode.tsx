import { atom, useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Choices } from "../components/Choices";
import { InfoProvider } from "../components/InfoPanel";
import { AddScore, ScoreCategory } from "../components/Score";
import { QRInfo } from "../info/QRInfo";
import { BaseEventProps } from "../model/Event";

export const enum QRCodeChoice {
  YES,
  NO,
}

export const qrCodeChoiceState = atom<QRCodeChoice | null>({
  key: "qrCodeChoiceState",
  default: null,
});

export function QRCode({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(qrCodeChoiceState);

  return (
    <>
      <p>
        You are shooting in a remote location and have 10 minutes to get a quick
        lunch during break time. There's a hip restaurant nearby, but it only
        has a QR code menu.
      </p>
      <Choices
        choices={[
          {
            choice: QRCodeChoice.YES,
            child:
              "Scan the QR code! It's so nice of the restaurant to save the trees and not print paper menus.",
          },
          {
            choice: QRCodeChoice.NO,
            child: '"dO you GUYs haVE a paPER meNU?"',
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === QRCodeChoice.YES && [
        <InfoProvider info={{ Component: QRInfo }}>
          <p>
            Your IP address and location are given to the website providing the
            menu.
          </p>
          <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
        </InfoProvider>,
        <p>
          You ordered and got your food within 10 minutes. You made it back on
          time. Nice!
        </p>,
      ]}
      {choice === QRCodeChoice.NO && [
        <p>
          The waiter sighs and goes to the back to ask his manager. They don't,
          so he tells you all the options. It took a while, and now you're late.
          The movie director yells at you.
        </p>,
        <AddScore category={ScoreCategory.CAREER} amount={-5} />,
        <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />,
      ]}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
