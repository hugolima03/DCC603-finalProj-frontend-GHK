'use client'
import React from 'react'

import { Book, Megaphone, MortarBoard } from '@styled-icons/octicons'

import Logo from 'components/Logo'
import * as S from './styles'

const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <Logo
        style={{ top: '2.4rem', left: '50%', transform: 'translateX(-50%)' }}
      />
      <S.SidebarLink href="/dashboard">
        <Book size={16} />
        Dashboard
      </S.SidebarLink>
      <S.SidebarLink href="/students">
        <MortarBoard size={16} />
        Estudantes
      </S.SidebarLink>
      <S.SidebarLink href="/support">
        <Megaphone size={16} />
        Suporte
      </S.SidebarLink>
    </S.SidebarContainer>
  )
}

export default Sidebar
