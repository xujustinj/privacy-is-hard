import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Feed from "./Feed";
import { EarthquakeGame } from "./game/EarthquakeGame";
import { Game, GameEvent } from "./game/Game";

function App() {
  const game: Game = useMemo(() => new EarthquakeGame(), []);
  const [events, setEvents] = useState<Array<GameEvent>>([]);
  const nextEvent = useCallback(() => {
    const event = game.nextEvent();
    if (event !== null) {
      setEvents([...events, event]);
    }
  }, [events, game]);

  return (
    <div className="App">
      <h1>Events Feed</h1>
      <button onClick={nextEvent}>Next Event</button> {/* temporary */}
      <Feed>{events.map(({ component, props }) => component(props))}</Feed>
    </div>
  );
}

export default App;
