import { ChangeEvent } from 'react'

import { Beaker, File, Globe } from '@styled-icons/octicons'

import * as S from './styles'

type TaskProps = {
  type: 'globe' | 'file' | 'beaker'
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: boolean) => void
}

const Task = ({ type = 'globe', onChange }: TaskProps) => {
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(e.target.checked)
  }

  const icons = {
    globe: <Globe />,
    file: <File />,
    beaker: <Beaker />
  }

  return (
    <S.Container>
      <S.Row>
        <S.IconWrapper type={type}>{icons[type]}</S.IconWrapper>
        <S.Text>Task!</S.Text>
      </S.Row>
      <input type="checkbox" onChange={onInputChange} />
    </S.Container>
  )
}

export default Task
