import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { Feed } from "./game/Feed";
import { DemoGame } from "./game/Example";
import { GameEvent, GameEventWrapper } from "./game/Event";
import { Game } from "./game/Game";

function App() {
  const game: Game = useMemo(() => new DemoGame(), []);
  const [events, setEvents] = useState<Array<GameEvent<any>>>([]);
  const nextEvent = useCallback(() => {
    const event = game.nextEvent();
    if (event !== null) {
      setEvents([...events, event]);
    }
  }, [events, game]);

  return (
    <div className="App">
      <h1>Events Feed</h1>
      <Feed onEmpty={nextEvent} onScrollToBottom={nextEvent}>
        {events.map((event) => (
          <GameEventWrapper key={event.id} event={event} />
        ))}
      </Feed>
    </div>
  );
}

export default App;
