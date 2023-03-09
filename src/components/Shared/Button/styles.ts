import styled from 'styled-components'

export const Content = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 3rem;
  width: 3rem;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`
