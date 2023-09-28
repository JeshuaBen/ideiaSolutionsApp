import * as S from "./styles";
import { TBaseLayout } from "./types";

const BaseLayout: React.FC<TBaseLayout> = ({ children, style }) => {
  return <S.Container style={style}>{children}</S.Container>;
};

export default BaseLayout;
