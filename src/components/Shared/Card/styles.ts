import styled from 'styled-components'

export const Content = styled.div`
  background-color: ${props => props.theme.colors.primaryLight};
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 20rem;
  padding: 0.5rem;
  width: 15rem;

  .title {
    align-items: center;
    display: flex;
    font-size: ${props => props.theme.sizes.normal};
    font-weight: 500;
    justify-content: center;
    margin-bottom: 0.5rem;
    min-height: 2.5rem;
    text-align: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.sizes.small};
    gap: 0.25rem;
  }

  img {
    border-radius: 0.5rem;
    height: 150px;
    width: auto;
  }

  button {
    align-items: center;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    font-weight: 500;
    gap: 1rem;
    height: 2rem;
    justify-content: center;
    margin-top: 0.75rem;
    width: 100%;

    :hover {
      background-color: ${props => props.theme.colors.secondaryDark};
    }
  }
`
