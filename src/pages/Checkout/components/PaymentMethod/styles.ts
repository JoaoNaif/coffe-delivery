import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-300']};
  border-radius: 8px;

  .title-container {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    margin-bottom: 2rem;

    color: ${(props) => props.theme['purple-300']};

    .description-container {
      color: ${(props) => props.theme['gray-800']};

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }

  .paymantMethod {
    display: flex;
    gap: 0.75rem;

    input[type='radio'] {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      flex: 1;

      padding: 1rem;
      border-radius: 8px;
      border: 1px solid transparent;

      cursor: pointer;

      background: ${(props) => props.theme['gray-400']};
      color: ${(props) => props.theme['purple-300']};

      transition: background-color 0.3s linear;

      &:hover {
        background: ${(props) => props.theme['gray-500']};
      }

      @media (max-width: 425px) {
        flex-direction: column;
        padding: 0.5rem;
      }
    }

    span {
      color: ${(props) => props.theme['gray-700']};
    }

    input[type='radio']:checked + label {
      background: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-300']};
    }
  }
`
