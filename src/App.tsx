import { useCallback, useState } from "react";
import { Feed } from "./game/Feed";
import { DemoGame } from "./game/DemoGame";
import { GameEvent, GameEventWrapper } from "./game/Event";
import { Game } from "./game/Game";

function App() {
  const [game, setGame] = useState<Game>(() => new DemoGame());
  const onAdvance = useCallback(() => setGame(game.advance()), [game, setGame]);
  const onCompleteEvent = useCallback(
    (event: GameEvent) => setGame(game.completeEvent(event)),
    [game, setGame]
  );

  return (
    <div>
      <Feed onAdvance={game.canAdvance ? onAdvance : null}>
        {game.events.map((event) => (
          <GameEventWrapper
            key={event.id}
            event={event}
            onCompleteEvent={() => onCompleteEvent(event)}
          />
        ))}
      </Feed>
    </div>
  );
}

export default App;
