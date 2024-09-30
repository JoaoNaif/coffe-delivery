import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  .form-container {
    display: flex;
    gap: 2rem;

    margin-top: 3rem;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .input-container {
      flex: 1;
    }

    .value-container {
      flex: 1;

      .total-container {
        padding: 2.5rem;
        background: ${(props) => props.theme['gray-300']};

        border-radius: 8px 60px 8px 60px;

        @media (max-width: 425px) {
          padding: 2rem 0.5rem;
        }

        .list-coffe {
          display: flex;
          flex-direction: column;

          gap: 1.5rem;

          max-height: 20rem;
          overflow-y: auto;

          @media (max-width: 425px) {
            gap: 0.5rem;
          }
        }

        .btn-confirm {
          width: 100%;
          font-size: 0.875rem;
          font-weight: bold;

          border: 0;
          border-radius: 8px;
          padding: 0.75rem 0.5rem;

          background: ${(props) => props.theme['yellow-300']};
          color: ${(props) => props.theme.white};

          cursor: pointer;

          transition: background-color 0.3s linear;

          &:hover {
            background: ${(props) => props.theme['yellow-600']};
          }
        }
      }
    }

    .title-check {
      font-size: 1.125rem;
      font-family: 'Baloo 2';
      margin-bottom: 0.5rem;
    }
  }
`
