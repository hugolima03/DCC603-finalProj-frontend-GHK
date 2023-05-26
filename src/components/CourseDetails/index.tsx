'use client'
import { useGlobal } from 'contexts/global'
import * as S from './styles'
import Task from 'components/Task'

const CourseDetails = () => {
  const { setActiveCourse } = useGlobal()
  return (
    <S.Container>
      <button onClick={() => setActiveCourse(undefined)}>Close</button>
      <S.ImageWrapper>
        <S.CoursePhoto
          src="https://source.unsplash.com/user/willianjusten/"
          alt="Course photo"
          fill
        />
      </S.ImageWrapper>

      <S.Title>A complete guide to using IndexedDB</S.Title>
      <S.Text>
        Data storage is an important part of most web applications, from
        tracking user data to application data. With the rapid development of
        faster and more robust web applications, efficient client storage is
        needed to aid development. Client-side storage on the web has evolved a
        lot over the years, from cookies used to store user data to the advent
        of WebSQL (currently deprecated), which allowed developers to store data
        in a SQL database in the browser, and in turn allowing users familiar
        with SQL to build robust applications easily.
      </S.Text>

      <S.Row>
        <S.H3>Conteúdo do curso</S.H3>
        <S.Counter>23 Tarefas • 12 horas</S.Counter>
      </S.Row>

      <S.TasksList>
        <Task type="globe" />
        <Task type="file" />
        <Task type="beaker" />
      </S.TasksList>
    </S.Container>
  )
}

export default CourseDetails
