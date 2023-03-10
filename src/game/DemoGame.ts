import { Earthquake } from "../events/Earthquake";
import { Interactive } from "../events/InteractiveExample";
import { GameEvent } from "./Event";
import { Game } from "./Game";

// Demo Game implementation that randomly gives you earthquakes and interactives
export class DemoGame implements Game {
  public readonly events: ReadonlyArray<GameEvent>;
  protected readonly activeEventIds: ReadonlySet<string>;
  public readonly canAdvance: boolean;

  constructor(
    events: ReadonlyArray<GameEvent> = [],
    activeEventIds: ReadonlySet<string> = new Set()
  ) {
    this.events = events;
    this.activeEventIds = activeEventIds;
    this.canAdvance = this.activeEventIds.size === 0;
  }

  protected nextEvent(): GameEvent {
    const r = Math.random();
    const count = this.events.length;
    return r > 0.5
      ? {
          id: `earthquake-${count}`,
          component: Earthquake,
          props: {},
        }
      : {
          id: `interactive-${count}`,
          component: Interactive,
          props: {
            message: `Event #${count}`,
          },
        };
  }

  public advance(): Game {
    const nextEvent = this.nextEvent();
    const nextActiveEventIds = new Set(this.activeEventIds.values());
    nextActiveEventIds.add(nextEvent.id);
    return new DemoGame([...this.events, nextEvent], nextActiveEventIds);
  }

  public completeEvent(event: GameEvent): Game {
    const nextActiveEventIds = new Set(this.activeEventIds.values());
    nextActiveEventIds.delete(event.id);
    return new DemoGame(this.events, nextActiveEventIds);
  }

  public isActive(event: GameEvent): boolean {
    return this.activeEventIds.has(event.id);
  }
}
