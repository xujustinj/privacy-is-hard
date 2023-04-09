import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore, ScoreCategory } from "../../components/Score";
import { DingInfo2 } from "../../info/DingInfo2";
import { DingInfo3 } from "../../info/DingInfo3";
import { BaseEventProps } from "../../model/Event";

export const enum PoliceChoice {
  YES,
  NO,
}

export const policeChoiceState = atom<PoliceChoice | null>({
  key: "policeChoiceState",
  default: null,
});

export function DingAA3({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(policeChoiceState);

  return (
    <>
      <p>
        Due to an emergency in your community, the police has requested 3 days
        of Ding footage from the entire neighbourhood. Would you like to provide
        video footage to the police?
      </p>
      <Choices
        choices={[
          {
            choice: PoliceChoice.YES,
            child: "Yes! It's an emergency after all.",
          },
          {
            choice: PoliceChoice.NO,
            child: "No thanks, Ding already knows too much about me.",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === PoliceChoice.YES && (
        <InfoProvider info={{ Component: DingInfo2 }}>
          <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
        </InfoProvider>
      )}
      {choice === PoliceChoice.NO && (
        <InfoProvider info={{ Component: DingInfo3 }}>
          <p>
            Oh no! Ding stored your video on the cloud, and the police got your
            videos without your consent! They went straight to Ding's parent
            company Babazon and asked for the video recordings.
          </p>
          <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
        </InfoProvider>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
