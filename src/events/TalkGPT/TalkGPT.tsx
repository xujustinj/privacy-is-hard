import { atom, useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export const enum TalkGPTChoice {
  YES,
  NO,
}

export const talkGPTChoiceState = atom<TalkGPTChoice | null>({
  key: "talkGPTChoiceState",
  default: null,
});

export function TalkGPT({ onNext }: BaseEventProps) {
  const [choice, setChoice] = useRecoilState(talkGPTChoiceState);

  return (
    <>
      <p>
        A startup is building a fun app for fans to chat with their favourite
        celebrities, based on TalkGPT. They contacted your managers to ask for a
        few thousand sample text messages so they can train a chatbot to mimic
        your style. They are willing to pay good money.
      </p>
      <Choices
        choices={[
          {
            choice: TalkGPTChoice.YES,
            child: "All aboard the bandwagon!",
          },
          {
            choice: TalkGPTChoice.NO,
            child: "No, you can't use my texts!",
          },
        ]}
        chosen={choice}
        onChoose={setChoice}
      />
      {choice === TalkGPTChoice.YES && <p>You provide some messages.</p>}
      {choice === TalkGPTChoice.NO && (
        <>
          <p>
            Your managers are disappointed that you turned down easy money. What
            a spoilsport!
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={-5} />
        </>
      )}

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
