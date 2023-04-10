import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AngelInfo } from "../../info/AngelInfo";
import { BaseEventProps } from "../../model/Event";

export function AngelTrendB1({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: AngelInfo }}>
        <p>
          Someone figured out a way to undo the silhouette filter from the Angel
          trend. Videos of naked influencers dancing are all over 4chin!
        </p>
      </InfoProvider>
      <p>What a relief &ndash; you really dodged a bullet this time!</p>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
