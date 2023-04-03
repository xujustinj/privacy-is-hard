import styled from "styled-components";
import { RenderProps } from "../util/Render";

export interface BaseEventProps {
  onCompleteEvent(): void;
}

export interface GameEvent<EProps extends BaseEventProps = any> {
  id: string;
  eventRender: RenderProps<EProps>;
}

export const GameEventContainer = styled.div`
  width: 100%;
  padding: 32px 64px;
`;
