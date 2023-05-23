import React from "react";

import ProfileButton from "@/components/ProfileButton";
import CourseButton from "@/components/CourseButton";

import * as S from "./styles";

const Page = () => {
  return (
    <S.Container>
      <ProfileButton />

      <S.Title>Cursos</S.Title>

      <CourseButton
        slug="java"
        courseCategory="Programming"
        title="Object-Oriented Programming in Java"
        coursePhoto="https://blog.logrocket.com/wp-content/uploads/2019/01/1_-y966xjyDL3Lxu_8hvu7nA.png?w=1024"
        end_date="2021-09-27 15:22:53.679985+02"
      />
      <CourseButton
        slug="java"
        courseCategory="Programming"
        title="Using Helmet in Node.js to secure your application"
        coursePhoto="https://blog.logrocket.com/wp-content/uploads/2023/03/Using-Helmet-Node-js-secure-application.png?w=730"
        end_date="2021-09-27 15:22:53.679985+02"
      />
      <CourseButton
        slug="java"
        courseCategory="Programming"
        title="Creating smoother CSS transitions with Animate CSS Grid"
        coursePhoto="https://blog.logrocket.com/wp-content/uploads/2022/12/creating-smoother-css-transitions-animate-css-grid-nocdn.png?w=730"
        end_date="2021-09-27 15:22:53.679985+02"
      />
      <CourseButton
        slug="java"
        courseCategory="Programming"
        title="Exploring Go mocking methods and the GoMock framework"
        coursePhoto="https://blog.logrocket.com/wp-content/uploads/2023/05/Exploring-Go-mocking-methods-GoMock-framework.png?w=1024"
        end_date="2021-09-27 15:22:53.679985+02"
      />
      <CourseButton
        slug="java"
        courseCategory="Programming"
        title="TanStack Query and WebSockets: Real-time React data fetching"
        coursePhoto="https://blog.logrocket.com/wp-content/uploads/2023/05/tanstack-query-websockets.png?w=730"
        end_date="2021-09-27 15:22:53.679985+02"
      />
    </S.Container>
  );
};

export default Page;
