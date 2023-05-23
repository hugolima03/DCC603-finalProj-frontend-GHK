import React from "react";

import * as S from "./style";

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <div style={{ width: "100%", background: "red" }}>Sidebar</div>
      {children}
      <div style={{ width: "100%", background: "green" }}>Badges</div>
    </S.Container>
  );
};

export default Base;
