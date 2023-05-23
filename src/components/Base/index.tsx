import React from "react";

import * as S from "./style";
import Sidebar from "@/components/Sidebar";

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <Sidebar />
      <S.Main>{children}</S.Main>
      <div>Badges</div>
    </S.Container>
  );
};

export default Base;
