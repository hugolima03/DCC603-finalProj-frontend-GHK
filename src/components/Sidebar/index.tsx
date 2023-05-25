'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import { Book, Megaphone, MortarBoard } from '@styled-icons/octicons'

import Logo from 'components/Logo'
import * as S from './styles'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <S.SidebarContainer>
      <Logo
        style={{ top: '2.4rem', left: '50%', transform: 'translateX(-50%)' }}
      />
      <S.SidebarLink href="/dashboard" active={pathname.includes('/dashboard')}>
        <Book size={16} />
        Dashboard
      </S.SidebarLink>
      <S.SidebarLink href="/students" active={pathname.includes('/students')}>
        <MortarBoard size={16} />
        Estudantes
      </S.SidebarLink>
      <S.SidebarLink href="/support" active={pathname.includes('/support')}>
        <Megaphone size={16} />
        Suporte
      </S.SidebarLink>
    </S.SidebarContainer>
  )
}

export default Sidebar
