import styled from 'styled-components'

export const Container = styled.div`
  .title {
    align-items: center;
    display: flex;
    font-size: ${props => props.theme.sizes.large};
    font-weight: 500;
    justify-content: center;
    margin-bottom: 0.75rem;
    min-height: 2.5rem;
    text-align: center;
  }

  .description {
    margin: 0.75rem 0;
    text-align: justify;
  }

  .details {
    display: flex;
    font-size: ${props => props.theme.sizes.small};
    justify-content: space-between;
  }

  img {
    border-radius: 0.5rem;
    height: auto;
    width: 100%;
  }
`
