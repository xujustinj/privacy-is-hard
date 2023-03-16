import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import GameBackground from "../images/background.jpg";
import { GameEvent, GameEventWrapper } from "./Event";
import { Feed } from "./Feed";
import { Generator, GeneratorStateContext, RandomGenerator } from "./Generator";
import {
  ScoreBar,
  ScoreCategory,
  Scores,
  ScoresContext,
  ScoresUpdater,
} from "./Score";

const GameContainer = styled.div`
  background-image: url(${GameBackground});
  height: 100vh;
  width: 100vw;
  padding: 64px;
  display: flex;
  row-gap: 16px;
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

  const [scores, setScores] = useState<Scores>(
    () => new Map(Object.values(ScoreCategory).map((value) => [value, 100]))
  );
  const addScores = useCallback<ScoresUpdater>(
    (updates: Scores) => {
      const newScores = new Map(scores);
      for (const [category, update] of updates) {
        newScores.set(category, (scores.get(category) ?? 0) + update);
      }
      setScores(newScores);
    },
    [scores, setScores]
  );

  return (
    <ScoresContext.Provider value={[scores, addScores]}>
      <GeneratorStateContext.Provider value={generator.state}>
        <GameContainer>
          <ScoreBar scores={scores} />
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
    </ScoresContext.Provider>
  );
}
