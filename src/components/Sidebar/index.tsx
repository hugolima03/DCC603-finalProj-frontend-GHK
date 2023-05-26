'use client'
import React from 'react'

import { signOut, useSession } from 'next-auth/react'
import { Book, Megaphone, MortarBoard, SignOut } from '@styled-icons/octicons'

import Logo from 'components/Logo'
import * as S from './styles'

export type SidebarProps = {
  small?: boolean
}

const Sidebar = ({ small = false }: SidebarProps) => {
  const { data } = useSession()

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
      {data?.user.role === 'admin' && (
        <S.SidebarLink href="/students">
          <MortarBoard size={16} />
          <p>Estudantes</p>
        </S.SidebarLink>
      )}
      {data?.user.role === 'admin' && (
        <S.SidebarLink href="/support">
          <Megaphone size={16} />
          <p>Suporte</p>
        </S.SidebarLink>
      )}
      <S.SidebarLink as="button" onClick={() => signOut()} href="/support">
        <SignOut size={16} />
        <p>Sair</p>
      </S.SidebarLink>
    </S.SidebarContainer>
  )
}

export default Sidebar
