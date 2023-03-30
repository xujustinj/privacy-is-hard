import { FunctionComponent } from "react";
import styled from "styled-components";
import { Colors } from "../util/colors";

export interface InfoPanelProps {
  InfoComponent: FunctionComponent<{}> | null;
}

export const InfoPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionBackground};
  color: white;
  overflow-y: scroll;
  padding: 32px;
  width: 40%;
  align-items: stretch;
`;
