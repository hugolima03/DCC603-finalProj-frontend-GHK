'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #f8fafc;

  position: relative;
`

export const Logo = styled(Image)`
  position: absolute;
  top: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
`

type SidebarLinkProps = {
  active: boolean
}

export const SidebarLink = styled(Link) <SidebarLinkProps>`
  ${({ active }) => css`
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

    ${!active ? css`
      color: #8C8D9C;
    ` : null}
  `}
`