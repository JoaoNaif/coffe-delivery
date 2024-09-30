import styled from 'styled-components'

export const DescriptionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 0;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  div {
    width: 60%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-family: 'Baloo 2';

    h1 {
      color: ${(props) => props.theme['gray-900']};
      font-size: 3rem;

      @media (max-width: 425px) {
        font-size: 1.875rem;
      }
    }

    h4 {
      color: ${(props) => props.theme['gray-800']};
      font-size: 1.25rem;
      font-weight: 400;
      width: 100%;

      @media (max-width: 425px) {
        font-size: 1rem;
      }
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;

      width: 100%;
      margin-top: 2rem;

      list-style: none;

      @media (max-width: 425px) {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  img {
    height: 22.5rem;
    width: 29.75rem;

    @media (max-width: 425px) {
      height: 20rem;
      width: 27.25rem;
    }
  }
`
