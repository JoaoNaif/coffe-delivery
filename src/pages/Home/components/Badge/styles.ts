import styled from 'styled-components'

export const BadgeContainer = styled.li`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;

    border-radius: 9999px;

    color: ${(props) => props.theme.white};
  }

  .purple {
    background: ${(props) => props.theme['purple-300']};
    height: 2rem;
    width: 2rem;
  }

  .yellow-dark {
    background: ${(props) => props.theme['yellow-600']};
    height: 2rem;
    width: 2rem;
  }

  .yellow-light {
    background: ${(props) => props.theme['yellow-300']};
    height: 2rem;
    width: 2rem;
  }

  .gray {
    background: ${(props) => props.theme['gray-700']};
    height: 2rem;
    width: 2rem;
  }

  span {
    flex: 1;

    width: 90%;

    text-align: left;
    font-size: 1rem;
    padding-left: 0.25rem;
  }
`
