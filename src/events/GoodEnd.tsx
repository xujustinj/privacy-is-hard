import styled from "styled-components";
import { Button } from "../components/Button";
import { BaseEventProps } from "../model/Event";

const GoodText = styled.p`
  color: green;
  font-weight: bold;
`;

export function GoodEnd({ onReset }: BaseEventProps) {
  return (
    <>
      <GoodText>
        Good job! You've mastered the art of private celebrity life.
      </GoodText>

      <Button onClick={onReset}>Play Again</Button>
    </>
  );
}
