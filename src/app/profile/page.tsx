import React from 'react'

import Edit from 'templates/Edit'

import * as S from './styles'

const Page = () => {
  return (
    <Edit>
      <S.Form>
        <S.Title>Editar perfil</S.Title>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Photo" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Celular" />
        <input type="text" placeholder="Instituição" />

        <input type='submit'/>
      </S.Form>
    </Edit>
  )
}

export default Page
