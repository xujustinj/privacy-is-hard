import { useEffect } from "react";
import styled from "styled-components";
import { BaseEventProps } from "./BaseEvent";

const Title = styled.h1`
  text-align: center;
`;

const HollywoodText = styled.span`
  font-size: 80pt;
  font-family: "SF Hollywood Hills";
`;

export function Start({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <Title>
        ONCE UPON A TIME IN
        <br />
        <HollywoodText>JOLLYWOOD</HollywoodText>
      </Title>
      <p>
        Hi there! Welcome to the life of a celebrity. Your biggest fans are
        always watching - will you be able to keep up with privacy and still be
        relevant? Let's find out!
      </p>
    </div>
  );
}
