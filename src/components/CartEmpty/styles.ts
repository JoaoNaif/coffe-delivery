import styled from 'styled-components'

export const CartEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;

  h1 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    padding: 1rem;
    border-radius: 8px;

    font-family: 'Baloo 2';
    font-weight: bold;

    text-decoration: none;

    cursor: pointer;

    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};

    transition: background-color 0.3s linear;

    &:hover {
      background: ${(props) => props.theme['yellow-600']};
    }
  }
`
