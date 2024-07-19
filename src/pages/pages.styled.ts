import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: var(--primary-bg-color);

    h2 {
        color: var(--secondary-color);
        font-size: 18px;
        margin-bottom: 2rem;

        a {
        color: var(--accent-color);
        text-decoration: none;
        font-weight: bold;
            &:hover {
                text-decoration: underline;
            }
        }
    }  
    button {
        padding: 10px 20px;
        background-color: var(--accent-color);
        color: var(--primary-bg-color);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background-color 0.3s;
        &:hover {
            background-color: var(--primary-color);
        }
    }     
`;