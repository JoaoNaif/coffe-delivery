import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};

    margin-bottom: 2rem;
  }

  .container-coffe {
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.25rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }
`
