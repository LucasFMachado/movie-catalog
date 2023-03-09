import styled from 'styled-components'

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 10rem);
  justify-content: center;
`

export const Loader = styled.div`
  animation: spin 1s linear infinite;
  border-radius: 50%;
  border-top: 0.5rem solid ${props => props.theme.colors.primary};
  border: 0.5rem solid ${props => props.theme.colors.secondary};
  height: 5rem;
  width: 5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
