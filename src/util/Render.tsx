import { FunctionComponent } from "react";

export type RenderProps<P = any> = P & {
  Component: FunctionComponent<Omit<P, "Component">>;
};

export function Render<P extends {}>({ Component, ...props }: RenderProps<P>) {
  return <Component {...props} />;
}
