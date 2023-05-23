import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: url("https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=100");
  background-size: cover;
 `

export const Title = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: 3.2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${theme.colors.white};

    margin-bottom: 0.8rem;
  `}
`

export const Text = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
`
