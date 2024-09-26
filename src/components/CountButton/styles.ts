import styled from 'styled-components'

export const CountButtonContainer = styled.div`
  display: flex;
  padding: 0.5rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  .amount {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme['purple-300']};

    &:hover {
      color: ${(props) => props.theme['purple-600']};
    }
  }
`
