'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #f8fafc;

  position: relative;
`

export const SidebarLink = styled(Link)`
  ${() => css`
    display: flex;
    padding: 1.6rem 2.4rem;

    gap: 1.2rem;

    transition: all 0.2s;
    font-size: 1.6rem;
    text-decoration: none;

    &:hover {
      background-color: #f1f5f9;
      border-left: 0.1rem solid #0F172A;
    }
  `}
`