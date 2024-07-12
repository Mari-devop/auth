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
`;