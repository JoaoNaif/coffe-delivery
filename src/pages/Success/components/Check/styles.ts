import styled from 'styled-components'

export const CheckContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .is-bold {
    font-weight: bold;
  }

  .icon {
    display: flex;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 50%;

    color: ${(props) => props.theme.white};
  }

  .purple {
    background: ${(props) => props.theme['purple-300']};
  }

  .yellow {
    background: ${(props) => props.theme['yellow-300']};
  }

  .dark-yellow {
    background: ${(props) => props.theme['yellow-600']};
  }

  .info-container {
    p {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }
`
