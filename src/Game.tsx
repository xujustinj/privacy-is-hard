import { useCallback, useMemo, useState } from "react";
import { GameEvent, GameEventWrapper } from "./game/Event";
import {
  Generator,
  GeneratorStateContext,
  RandomGenerator,
} from "./game/Generator";
import { Feed } from "./game/Feed";

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
      <Feed onAdvance={canAdvance ? onAdvance : null}>
        {events.map((event) => (
          <GameEventWrapper
            key={event.id}
            event={event}
            finish={() => onFinish(event)}
          />
        ))}
      </Feed>
    </GeneratorStateContext.Provider>
  );
}
