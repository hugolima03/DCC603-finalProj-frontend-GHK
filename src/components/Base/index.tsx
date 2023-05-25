'use client'
import React from 'react'

import Sidebar from 'components/Sidebar'
import Badges from 'components/Badges'

import * as S from './style'
import { useGlobal } from 'contexts/global'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const { activeCourse } = useGlobal()

  return (
    <S.Container hasActiveCourse={!!activeCourse}>
      <Sidebar small={!!activeCourse} />
      <S.Main>{children}</S.Main>
      <Badges />
    </S.Container>
  )
}

export default Base
