import React from "react";

import dayjs from "dayjs";

import * as S from "./styles";

type CourseButtonProps = {
  slug: string;
  title: string;
  coursePhoto: string;
  courseCategory: string;
  end_date: string;
};

const CourseButton = ({
  slug,
  title,
  coursePhoto,
  end_date,
  courseCategory,
}: CourseButtonProps) => {
  return (
    <S.Container href={`/courses/${slug}`}>
      <S.CouseImageContainer>
        <S.CourseImage src={coursePhoto} alt={title} width={324} height={215} />
      </S.CouseImageContainer>
      <S.Content>
        <S.Subtitle>{`${courseCategory} • ${dayjs(end_date).format(
          "DD/MM/YYYY"
        )}`}</S.Subtitle>
        <S.Strong>{title}</S.Strong>
      </S.Content>
    </S.Container>
  );
};

export default CourseButton;
