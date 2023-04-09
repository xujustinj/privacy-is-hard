import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { SequenceGenerator } from "../events/SequenceGenerator";
import { Start } from "../events/Start";
import { GameEvent } from "../model/Event";
import { EventGenerator } from "../model/EventGenerator";
import { gameState, useResetGameState } from "../model/Game";
import { Colors, rgba } from "../util/colors";
import { Render } from "../util/Render";
import { GameEventContainer } from "./Event";
import { InfoContext } from "./InfoPanel";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${rgba(Colors.sectionBackground)};
  overflow-y: scroll;
  width: 60%;
  align-items: center;
  font-size: 14pt;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 28px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255);
    }
  }
`;

const StartEvent: GameEvent = {
  id: "start",
  eventRender: { Component: Start },
};

export function Feed() {
  const [generator, setGenerator] = useState<EventGenerator>(
    () => new SequenceGenerator()
  );
  const game = useRecoilValue(gameState);
  const [events, setEvents] = useState<ReadonlyArray<GameEvent>>([StartEvent]);

  const onNext = useCallback(() => {
    const nextEvent = generator.next(game);
    if (nextEvent !== null) {
      setEvents((events) => [...events, nextEvent]);
    }
  }, [generator, game, setEvents]);

  const resetGame = useResetGameState();

  const setInfo = useContext(InfoContext)[1];

  const onReset = useCallback(() => {
    setGenerator(new SequenceGenerator());
    resetGame();
    setEvents([StartEvent]);
    setInfo(null);
  }, [setGenerator, setEvents, setInfo, resetGame]);

  // Slightly hacky: the feed only changes when the events or game state change
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [events, game]);

  return (
    <FeedContainer>
      {events.map((event) => {
        const { id, eventRender } = event;
        return (
          <GameEventContainer key={id}>
            <Render
              onNext={event === events[events.length - 1] ? onNext : undefined}
              {...eventRender}
              onReset={onReset}
            />
          </GameEventContainer>
        );
      })}
      <div ref={endRef} />
    </FeedContainer>
  );
}
