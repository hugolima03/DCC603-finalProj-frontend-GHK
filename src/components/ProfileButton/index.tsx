import React from "react";

import * as S from "./styles";

const ProfileButton = () => {
  return (
    <S.Container href="/profile">
      <S.Profile
        alt="Profile icon"
        src="/test.png"
        width={60}
        height={60}
      />
      <S.Column>
        <S.Title>Hugo Lima</S.Title>
        <S.Text>Boa Vista, RR</S.Text>
      </S.Column>
    </S.Container>
  );
};

export default ProfileButton;
