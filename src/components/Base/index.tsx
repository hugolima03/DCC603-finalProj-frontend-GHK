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
      {children}
      <div style={{ width: "100%", borderLeft: '0.1rem solid #f3f4f6' }}>Badges</div>
    </S.Container>
  );
};

export default Base;
