import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer  = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    width: 250px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary-bg-color);
    label {
        font-size: 14px;
        font-weight: bold;
        color: var(--secondary-color);
    }
    
    input {
        padding: 10px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        outline: none;
        font-size: 14px;
    }

    button {
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: var(--primary-color);
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            background-color: var(--light-color);
            color: var(--secondary-color);
        }
    }
`;