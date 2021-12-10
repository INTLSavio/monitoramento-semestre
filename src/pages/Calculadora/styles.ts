import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;

    button {
        height: 3rem;
        width: 5rem;
        border-radius: 0.4rem;
        color: white;
        background: blue;
    }
`;

export const InputGroup = styled.div`
`;

export const Resultado = styled.div`
    display: flex;
    margin: 2rem;
    h1 {
        margin-right: 0.5rem;
    }

    .aprovado {
        color: green;
    }

    .reprovado {
        color: red;
    }

    .np3 {
        color: yellow;
    }
`;