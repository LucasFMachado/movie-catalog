import styled from 'styled-components'

export const Content = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: 5rem;
  width: 100%;

  nav {
    align-items: center;
    display: flex;
    gap: 1rem;
    height: 100%;
    justify-content: center;
    margin: 0 3rem;
  }
`
