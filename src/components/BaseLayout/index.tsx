import * as S from "./styles";
import { TBaseLayout } from "./types";

const BaseLayout: React.FC<TBaseLayout> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default BaseLayout;
