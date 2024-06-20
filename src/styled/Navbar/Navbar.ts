import styled from 'styled-components';

export const NavWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 10%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0 0 1rem 1rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    li {
        margin: 0 10px;
        padding: 0.25rem;
        list-style: none;
        a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
        }
    }
`;
