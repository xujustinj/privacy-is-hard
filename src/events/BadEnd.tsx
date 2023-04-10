import { useCallback, useState } from "react";
import styled from "styled-components";
import { Button, ButtonPanel } from "../components/Button";
import { BaseEventProps } from "../model/Event";

const BadText = styled.p`
  color: red;
  font-weight: bold;
`;

export function BadEnd({ onNext, onReset }: BaseEventProps) {
  const [didContinue, setContinue] = useState<boolean | null>(null);
  const onContinue = useCallback(() => {
    setContinue(true);
    if (onNext !== undefined) {
      onNext();
    }
  }, [onNext, setContinue]);

  return (
    <>
      <BadText>
        Uh oh! Your privacy score dropped to 0. Your biggest fan stole your
        identity and scammed other fans pretending to be you. Your reputation is
        ruined!
      </BadText>

      <p>
        <b>
          Better luck next time! You can still continue playing, if you'd like.
        </b>
      </p>

      <ButtonPanel>
        <Button
          onClick={onContinue}
          disabled={didContinue !== null}
          isSelected={didContinue === true}
        >
          Continue Anyway
        </Button>
        <Button onClick={onReset} disabled={didContinue !== null}>
          Play Again
        </Button>
      </ButtonPanel>
    </>
  );
}
