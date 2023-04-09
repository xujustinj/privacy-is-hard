import { RenderProps } from "../util/Render";

export interface BaseEventProps {
  // If this is the active event, signal that we should trigger the next event.
  // Can only be called once; after calling this becomes undefined.
  // To be safe, the function should be idempotent so that nothing happens even
  // if multiple calls do occur.
  onNext?(): void;
}

export interface GameEvent<EProps extends BaseEventProps = any> {
  id: string;
  eventRender: RenderProps<EProps>;
}
