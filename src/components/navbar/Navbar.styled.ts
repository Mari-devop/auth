import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--primary-color);
    color: #fff;

    nav {
        width: 100%;
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            padding: 0 2rem;
        }
        li {
            a {
               text-decoration: none;
            }  
            a:visited {
               color: var(--light-color);
            }  

        }    
    }   
    img {
        width: 50px;
    }

    button {
        background-color: var(--primary-bg-color);
        color: var(--secondary-color);
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
    }
    button:hover {
        border: 1px solid var(--light-color);
        border-radius: 8px;     
    }
`;