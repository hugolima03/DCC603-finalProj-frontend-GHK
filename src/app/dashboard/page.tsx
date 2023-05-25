'use client'
import React from 'react'

import ProfileButton from 'components/ProfileButton'
import CourseButton from 'components/CourseButton'

import * as S from './styles'
import { useGlobal } from 'contexts/global'

const Page = () => {
  const { activeCourse } = useGlobal()

  const data = [
    {
      slug: 'java',
      courseCategory: 'Programação',
      title: 'A complete guide to using IndexedDB',
      coursePhoto:
        'https://blog.logrocket.com/wp-content/uploads/2023/05/complete-guide-using-indexeddb-nocdn.png',
      end_date: '2021-09-27 15:22:53.679985+02'
    },
    {
      slug: 'java',
      courseCategory: 'Programação',
      title: 'Programação Orientada a Objetos com Java',
      coursePhoto:
        'https://blog.logrocket.com/wp-content/uploads/2019/01/1_-y966xjyDL3Lxu_8hvu7nA.png?w=1024',
      end_date: '2021-09-27 15:22:53.679985+02'
    },
    {
      slug: 'java',
      courseCategory: 'Programação',
      title: 'Usando o Helmet no Node.js para proteger seu app',
      coursePhoto:
        'https://blog.logrocket.com/wp-content/uploads/2023/03/Using-Helmet-Node-js-secure-application.png?w=730',
      end_date: '2021-09-27 15:22:53.679985+02'
    },
    {
      slug: 'java',
      courseCategory: 'Programação',
      title: 'Criando transições CSS mais suaves com o Animate CSS Grid',
      coursePhoto:
        'https://blog.logrocket.com/wp-content/uploads/2022/12/creating-smoother-css-transitions-animate-css-grid-nocdn.png?w=730',
      end_date: '2021-09-27 15:22:53.679985+02'
    },
    {
      slug: 'java',
      courseCategory: 'Programação',
      title: 'Explorando os métodos de simulação Go e a estrutura GoMock',
      coursePhoto:
        'https://blog.logrocket.com/wp-content/uploads/2023/05/Exploring-Go-mocking-methods-GoMock-framework.png?w=1024',
      end_date: '2021-09-27 15:22:53.679985+02'
    },
    {
      slug: 'java',
      courseCategory: 'Programação',
      title: 'TanStack Query e WebSockets: busca de dados React em tempo real',
      coursePhoto:
        'https://blog.logrocket.com/wp-content/uploads/2023/05/tanstack-query-websockets.png?w=730',
      end_date: '2021-09-27 15:22:53.679985+02'
    }
  ]

  return (
    <S.Container>
      <ProfileButton />

      <S.Title>Cursos</S.Title>

      {data.map((item) => (
        <CourseButton key={item.coursePhoto} small={!!activeCourse} {...item} />
      ))}
    </S.Container>
  )
}

export default Page
