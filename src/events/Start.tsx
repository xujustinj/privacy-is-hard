import { useEffect } from "react";
import styled from "styled-components";
import { BaseEventProps } from "./BaseEvent";

const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const HollywoodText = styled.span`
  font-size: 80pt;
  font-family: "SF Hollywood Hills";
`;

const Subtitle = styled.p`
  text-align: center;
  margin: 0;

  > a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
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
      <Subtitle>
        a{" "}
        <a
          href="https://cs.uwaterloo.ca/~browndg/492W23/readings.shtml"
          target="_blank"
          rel="noreferrer"
        >
          CS492
        </a>{" "}
        game by{" "}
        <a
          href="https://www.linkedin.com/in/estelle-zk-w/"
          target="_blank"
          rel="noreferrer"
        >
          Estelle
        </a>
        ,{" "}
        <a href="https://justinxu.me/" target="_blank" rel="noreferrer">
          Justin
        </a>
        , and{" "}
        <a
          href="https://www.linkedin.com/in/netramali/"
          target="_blank"
          rel="noreferrer"
        >
          Netra
        </a>
      </Subtitle>
      <br />
      <p>
        Hi there! Welcome to the life of a celebrity. Your biggest fans are
        always watching - will you be able to keep up with privacy and still be
        relevant? Let's find out!
      </p>
    </div>
  );
}
