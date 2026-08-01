import styled, { keyframes } from "styled-components";

export const SyncStyle = styled.div`
    display: grid;
    margin: 3em;
    border: 1px solid #184985;
    background-color: #0b2545;
    min-height: 200px;
    grid-template-rows: 3em 1fr;
    border-radius: 10px;
    max-width: 1000px;
    margin: 3em auto;
    width: 80%;
    > div {
        padding: 10px;
        border-bottom: 1px solid;
        display: flex;
        justify-content: space-between;
        background-color: #eef4ed;
        color: #007ea7;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    P {
        margin: 10px;
    }

    @media (max-width: 600px) {
        grid-template-rows: 1fr 4fr;
        width: 90%;

        div {
            align-items: center;
        }
    }

    @media (min-width: 900px) {
    }
`;

export const AlunosDoDiaStyle = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #0b2545;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 20px;

    table {
        flex: 1;
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-size: 0.875rem;
        color: #eef4ed;
    }
    thead {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        text-align: center;
        border-bottom: 1px solid;
    }

    th {
        text-align: center;
        padding: 10px;
        border: 1px solid;
        border-color: #999f985f;
    }

    td {
        text-align: center;
        padding: 10px;
        border: 1px solid;
        border-color: #999f985f;
    }
`;

export const BtnDiv = styled.div`
    display: flex;
    gap: 10px;
    height: 2rem;

    button {
        display: flex;
        color: #eef4ed;
        align-items: center;
        gap: 5px;
        padding: 5px;
        font-weight: bolder;
        background-color: #0b2545;
    }

    button:hover {
        cursor: pointer;
    }

    button:disabled:hover {
        background-color: #8da9c4;
        border-radius: 5px;
        cursor: not-allowed;
    }
    button:disabled svg {
        color: #eef4ed;
        justify-self: flex-end;
        height: 20px;
    }
    button:disabled {
        background-color: #8da9c4;
        justify-self: flex-end;
        border-radius: 5px;
    }

    button:not(:disabled) {
        background-color: #0b2545;
        border-radius: 5px;
    }
    button:not(:disabled) svg {
        color: #eef4ed;
        justify-self: flex-end;
        height: 20px;
    }
`;

export const l3 = keyframes`
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
`;

export const Loader = styled.div`
    width: 60px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, #ffffff 90%, #ffffff00);
    background:
        var(--_g) 0% 50%,
        var(--_g) 50% 50%,
        var(--_g) 100% 50%;
    background-size: calc(100% / 3) 50%;
    animation: ${l3} 1s infinite linear;
`;


export const LoaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
