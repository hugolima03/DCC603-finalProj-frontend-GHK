"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { Book, Megaphone, MortarBoard } from "@styled-icons/octicons";

import * as S from "./styles";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <S.SidebarContainer>
      <S.Logo alt="SG Cursos" src="/logo.png" width={150} height={58} />
      <S.SidebarLink href="/dashboard" active={pathname.includes("/dashboard")}>
        <Book size={16} />
        Dashboard
      </S.SidebarLink>
      <S.SidebarLink href="/students" active={pathname.includes("/students")}>
        <MortarBoard size={16} />
        Estudantes
      </S.SidebarLink>
      <S.SidebarLink href="/support" active={pathname.includes("/support")}>
        <Megaphone size={16} />
        Suporte
      </S.SidebarLink>
    </S.SidebarContainer>
  );
};

export default Sidebar;
