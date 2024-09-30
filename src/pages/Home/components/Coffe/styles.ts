import styled from 'styled-components'

export const CoffeContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 16rem;
  min-height: 19.375rem;

  background: ${(props) => props.theme['gray-300']};
  border-radius: 8px 50px;

  padding: 2rem;
  padding-top: 4rem;

  position: relative;

  img {
    position: absolute;
    top: -2rem;
    left: 35%;
  }

  .attributes {
    list-style: none;

    display: flex;
    justify-content: center;
    gap: 0.5rem;

    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 0.75rem;
    margin: 0.75rem 0;

    color: ${(props) => props.theme['yellow-300']};

    li {
      padding: 0 0.5rem;

      border-radius: 8px;
      background: ${(props) => props.theme['yellow-100']};
    }
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
  }

  p {
    margin: 0.625rem 0;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }

  .container-price {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    .value {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;

      font-family: 'Baloo 2';
      font-weight: bold;
      font-size: 1.5rem;

      p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.75rem;
      }
    }

    .container-sale {
      display: flex;
      gap: 0.5rem;

      .sale {
        display: flex;
        justify-content: center;

        padding: 0.5rem;
        border: 0;
        border-radius: 8px;

        background: ${(props) => props.theme['purple-600']};
        color: ${(props) => props.theme.white};

        cursor: pointer;

        transition: background-color 0.2s ease-out;

        &:hover {
          background: ${(props) => props.theme['purple-300']};
        }
      }
    }
  }
`
