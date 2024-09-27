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

    background: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme.white};
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
