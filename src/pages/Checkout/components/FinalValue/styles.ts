import styled from 'styled-components'

export const FinalValueContainer = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 1.5rem 0;
  gap: 0.75rem;

  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    span {
      font-size: 1rem;
    }

    &:last-child {
      font-weight: bold;
      font-size: 1.25rem;

      span {
        font-size: 1.25rem;
      }
    }
  }
`
