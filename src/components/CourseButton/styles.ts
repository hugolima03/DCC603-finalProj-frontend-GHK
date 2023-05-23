'use client'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;

  border: 0.1rem solid #f3f4f6;
  text-decoration: none;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 30rem;

  padding: 3.2rem 4.2rem;
`

export const CourseImage = styled(Image)``

export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`

export const Strong = styled.strong`
  font-size: 2.4rem;
  font-weight: 500;

  margin-top: auto;
`