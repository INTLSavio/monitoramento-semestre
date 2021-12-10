import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    .react-modal-overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        background: #f0f2f5;
        border-radius: 0.25rem;
    }

    * {
        button {
            cursor: pointer;
            border: none;
            border-radius: 0.2rem;
        }
    }
`;