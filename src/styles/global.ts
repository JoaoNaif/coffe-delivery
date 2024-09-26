import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
    }

    body {
        background: ${(props) => props.theme['gray-200']};
        color: ${(props) => props.theme['gray-700']};
        -webkit-font-smoothing: antialiased;
        padding: 2rem 10rem;
    }

    body, input, textarea, button {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
    }
`
