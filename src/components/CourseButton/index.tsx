import React from 'react'

import dayjs from 'dayjs'

import * as S from './styles'

type CourseButtonProps = {
  slug: string
  title: string
  coursePhoto: string
  courseCategory: string
  end_date: string | Date
  small?: boolean
}

const CourseButton = ({
  title,
  coursePhoto,
  end_date,
  courseCategory,
  small = false
}: CourseButtonProps) => {
  const imgProps = small
    ? { width: 125, height: 125 }
    : { width: 324, height: 215 }

  return (
    <S.Container small={small}>
      <S.CouseImageContainer>
        <S.CourseImage src={coursePhoto} alt={title} {...imgProps} />
      </S.CouseImageContainer>
      <S.Content>
        <S.Subtitle>{`${courseCategory} • ${dayjs(end_date).format(
          'DD/MM/YYYY'
        )}`}</S.Subtitle>
        <S.Strong>{title}</S.Strong>
      </S.Content>
    </S.Container>
  )
}

export default CourseButton
