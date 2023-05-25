import React from "react";

import Sidebar from "components/Sidebar";
import Badges from "components/Badges";

import * as S from "./style";

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <Sidebar />
      <S.Main>{children}</S.Main>
      <Badges />
    </S.Container>
  );
};

export default Base;
