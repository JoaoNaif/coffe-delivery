import styled from 'styled-components'

export const SuccessContainer = styled.main`
  gap: 3rem;
  margin-top: 3rem;

  .main-container {
    display: flex;
    gap: 3rem;
    width: 100%;
  }

  .check-container {
    h1 {
      font-family: 'Baloo 2';
      font-size: 2rem;

      color: ${(props) => props.theme['yellow-600']};
    }

    p {
      font-size: 1.5rem;

      color: ${(props) => props.theme['gray-800']};
    }

    .list-check {
      flex: 1;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      list-style: none;

      margin-top: 3rem;
      padding: 2.5rem;
      border: 1px solid;
      border-radius: 8px 50px 8px 50px;
      border-image: linear-gradient(
          45deg,
          ${(props) => props.theme['yellow-300']},
          ${(props) => props.theme['purple-300']}
        )
        1;
      position: relative;
    }

    img {
      flex: 1;
    }
  }
`
