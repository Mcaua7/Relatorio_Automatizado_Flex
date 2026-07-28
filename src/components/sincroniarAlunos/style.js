import styled from "styled-components";

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
        width: 80%;

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

    td {
        text-align: center;
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
