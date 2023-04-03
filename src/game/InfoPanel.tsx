import { createContext, PropsWithChildren, useContext } from "react";
import styled from "styled-components";
import { Colors } from "../util/colors";
import { Render, RenderProps } from "../util/Render";

export const InfoContext = createContext<
  [RenderProps | null, (info: RenderProps) => void]
>([null, () => {}]);

const InfoPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionBackground};
  color: white;
  overflow-y: scroll;
  padding: 32px;
  width: 40%;
  align-items: stretch;
`;

export interface InfoProviderProps<IProps = any> extends PropsWithChildren {
  info: RenderProps<IProps>;
}

const InfoProviderContainer = styled.div<{ intensity: number }>`
  background-color: rgba(53, 117, 142, 0.2);
  outline: 16px rgba(53, 117, 142, 0.2) solid;
  border-radius: 8px;

  :hover {
    background-color: rgba(53, 117, 142, 0.5);
    outline: 16px rgba(53, 117, 142, 0.5) solid;
  }
`;

export function InfoProvider<IProps = any>({
  children,
  info,
}: InfoProviderProps<IProps>) {
  const [contextInfo, setInfo] = useContext(InfoContext);
  const intensity = contextInfo === info ? 0.4 : 0.2;
  return (
    <InfoProviderContainer
      intensity={intensity}
      onMouseOver={() => setInfo(info)}
    >
      {children}
    </InfoProviderContainer>
  );
}

export function InfoPanel() {
  const info = useContext(InfoContext)[0];
  return (
    <InfoPanelContainer>
      {info !== null && <Render {...info} />}
    </InfoPanelContainer>
  );
}
