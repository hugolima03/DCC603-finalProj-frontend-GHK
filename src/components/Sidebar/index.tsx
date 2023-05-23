'use client'
import React from "react";

import { Book, Megaphone, MortarBoard } from "@styled-icons/octicons";

import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <S.Logo alt="SG Cursos" src="/logo.png" width={150} height={58} />
      <S.SidebarLink href="/dashboard">
        <Book size={16} />
        Dashboard
      </S.SidebarLink>
      <S.SidebarLink href="/students">
        <MortarBoard size={16} />
        Students
      </S.SidebarLink>
      <S.SidebarLink href="/support">
        <Megaphone size={16} />
        Support
      </S.SidebarLink>
    </S.SidebarContainer>
  );
};

export default Sidebar;
