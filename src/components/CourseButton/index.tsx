'use client'
import React from 'react'

import dayjs from 'dayjs'

import * as S from './styles'
import { useGlobal } from 'contexts/global'

type CourseButtonProps = {
  slug: string
  course_name: string
  course_photo: string
  course_workload: number
  start_date: string
  end_date: string
  teacher: string
  course_category: string
  small?: boolean
}

const CourseButton = ({
  slug,
  course_category,
  course_name,
  course_photo,
  small = false
}: CourseButtonProps) => {
  const { setActiveCourse } = useGlobal()

  const imgProps = small
    ? { width: 125, height: 125 }
    : { width: 324, height: 215 }

  return (
    <S.Container small={small} onClick={() => setActiveCourse(slug)}>
      <S.CouseImageContainer>
        <S.CourseImage src={course_photo} alt={course_name} {...imgProps} />
      </S.CouseImageContainer>
      <S.Content>
        <S.Subtitle>{`${course_category} • ${dayjs().format(
          'DD/MM/YYYY'
        )}`}</S.Subtitle>
        <S.Strong>{course_name}</S.Strong>
      </S.Content>
    </S.Container>
  )
}

export default CourseButton
