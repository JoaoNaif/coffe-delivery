import styled from 'styled-components'

export const DeliveryAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  background: ${(props) => props.theme['gray-300']};
  border-radius: 8px;

  .title-container {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    margin-bottom: 2rem;

    color: ${(props) => props.theme['yellow-300']};

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

  .number-container {
    display: flex;
    gap: 0.75rem;

    .complement {
      flex: 1;
    }
  }

  .city-container {
    display: flex;
    gap: 0.75rem;

    .city {
      width: 70%;
    }

    .uf {
      width: 15%;
    }
  }

  input {
    padding: 0.75rem;

    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 8px;

    color: ${(props) => props.theme['gray-700']};
    background: ${(props) => props.theme['gray-400']};
  }

  .error {
    border: 1px solid ${(props) => props.theme['red-600']};

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['red-600']};
    }
  }
`
