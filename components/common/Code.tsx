import { Code as ReactCode } from "react-code-blocks";
import { stringStyle } from "../../constants/codeStyle";

export const Code = ({ children }: { children: string }) => {
  return <ReactCode text={children} language="jsx" theme={stringStyle} />;
};
