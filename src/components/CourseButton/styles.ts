'use client'
import Link from 'next/link'
import Image from 'next/image'
import styled, { css } from 'styled-components'

type ContainerProps = {
  small: boolean
}

export const Container = styled(Link)<ContainerProps>`
  ${({ small }) => css`
    display: flex;
    flex-direction: row;

    border: 0.1rem solid #ebebf0;
    background-color: white;
    text-decoration: none;

    ${small
      ? css`
          ${Content} {
            padding: 1.6rem;
            justify-content: center;
            gap: 1.6rem;
          }

          ${Subtitle} {
            font-size: 1.2rem;
          }

          ${Strong} {
            font-size: 1.6rem;
            margin: 0;
          }

          ${CourseImage} {
            border-radius: 0.8rem;
          }
        `
      : null}

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 4.2rem;

  transition: all 0.2s;
`

export const CouseImageContainer = styled.div`
  overflow: hidden;
`

export const CourseImage = styled(Image)`
  transition: all 0.2s;
  object-fit: cover;
`

export const Subtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: #ababab;
`

export const Strong = styled.strong`
  font-size: 2.4rem;
  font-weight: 500;

  margin-top: auto;
  max-width: 30rem;
`
