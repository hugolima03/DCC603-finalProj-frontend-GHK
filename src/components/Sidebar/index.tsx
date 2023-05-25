'use client'
import React from 'react'

import { Book, Megaphone, MortarBoard } from '@styled-icons/octicons'

import Logo from 'components/Logo'
import * as S from './styles'

export type SidebarProps = {
  small: boolean
}

const Sidebar = ({ small }: SidebarProps) => {
  return (
    <S.SidebarContainer small={small}>
      {small ? null : (
        <Logo
          style={{ top: '2.4rem', left: '50%', transform: 'translateX(-50%)' }}
        />
      )}
      <S.SidebarLink href="/dashboard">
        <Book size={16} />
        <p>Dashboard</p>
      </S.SidebarLink>
      <S.SidebarLink href="/students">
        <MortarBoard size={16} />
        <p>Estudantes</p>
      </S.SidebarLink>
      <S.SidebarLink href="/support">
        <Megaphone size={16} />
        <p>Suporte</p>
      </S.SidebarLink>
    </S.SidebarContainer>
  )
}

export default Sidebar
