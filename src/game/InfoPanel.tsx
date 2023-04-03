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

export function InfoProvider<IProps = any>({
  children,
  info,
}: InfoProviderProps<IProps>) {
  const setInfo = useContext(InfoContext)[1];
  return <div onMouseOver={() => setInfo(info)}>{children}</div>;
}

export function InfoPanel() {
  const info = useContext(InfoContext)[0];
  return (
    <InfoPanelContainer>
      {info !== null && <Render {...info} />}
    </InfoPanelContainer>
  );
}
