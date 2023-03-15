import { useCallback, useMemo, useState } from "react";
import { GameEvent, GameEventWrapper } from "./Event";
import { Generator, GeneratorStateContext, RandomGenerator } from "./Generator";
import { Feed } from "./Feed";
import styled from "styled-components";
import GameBackground from "../images/background.jpg";

const GameContainer = styled.div`
  background-image: url(${GameBackground});
  height: 100vh;
  width: 100vw;
  padding: 64px;
  display: flex;
  flex-direction: column;
`;

export function Game() {
  const generator = useMemo<Generator>(() => new RandomGenerator(), []);
  const [events, setEvents] = useState<ReadonlyArray<GameEvent>>([]);
  const [activeEvent, setActiveEvent] = useState<GameEvent | null>(null);

  const canAdvance = activeEvent === null;
  const onAdvance = useCallback(() => {
    if (canAdvance) {
      const nextEvent = generator.next();
      if (nextEvent !== null) {
        setEvents([...events, nextEvent]);
        setActiveEvent(nextEvent);
      }
    }
  }, [canAdvance, events, generator, setActiveEvent, setEvents]);

  const onFinish = useCallback(
    (event: GameEvent) => {
      if (event === activeEvent) {
        setActiveEvent(null);
      }
    },
    [activeEvent, setActiveEvent]
  );

  return (
    <GeneratorStateContext.Provider value={generator.state}>
      <GameContainer>
        <Feed onAdvance={canAdvance ? onAdvance : null}>
          {events.map((event) => (
            <GameEventWrapper
              key={event.id}
              event={event}
              finish={() => onFinish(event)}
            />
          ))}
        </Feed>
      </GameContainer>
    </GeneratorStateContext.Provider>
  );
}
