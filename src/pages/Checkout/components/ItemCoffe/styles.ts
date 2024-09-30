import styled from 'styled-components'

export const ItemCoffeContainer = styled.li`
  display: flex;

  padding: 0 0.25rem;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    margin-right: 1.25rem;
  }

  .info-container {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .button-container {
      display: flex;
      gap: 0.5rem;

      .btn-trash {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        padding: 0.5rem;

        border-radius: 8px;
        border: 0;

        background: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['purple-300']};

        cursor: pointer;

        &:hover {
          background: ${(props) => props.theme['gray-500']};
        }

        span {
          font-size: 0.75rem;
          color: ${(props) => props.theme['gray-700']};
        }
      }
    }
  }

  .price {
    font-size: 1rem;
    font-weight: bold;
  }
`
