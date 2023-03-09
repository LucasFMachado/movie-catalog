import styled from 'styled-components'

export const Content = styled.div`
  background-color: ${props => props.theme.colors.primaryDark};
  border-radius: 1rem;
  color: ${props => props.theme.colors.text};
  padding: 0.3rem 0.5rem;
  width: fit-content;
`
