import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;

      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-300']};
      border-radius: 8px;

      p {
        color: ${(props) => props.theme['purple-600']};
      }
    }

    a {
      display: flex;
      padding: 0.5rem;

      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-600']};
      border-radius: 8px;

      transition: background-color 0.2s linear;
      transition: color 0.3s ease-in;

      &:hover {
        background: ${(props) => props.theme['yellow-300']};
        color: ${(props) => props.theme['yellow-100']};
      }
    }

    .full {
      position: relative;

      span {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;

        padding: 0 0.35rem;
        font-size: 1.1rem;
        font-weight: bold;

        background: ${(props) => props.theme['yellow-600']};
        color: ${(props) => props.theme.white};
        border-radius: 99999px;
      }
    }
  }
`
