import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-height: 90vh;
    height: 100%;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(160, 160, 250, 0.5);
    font-weight: bold;
    margin: 0 auto;
    padding: 1rem 2rem;
    border-radius: 1rem;
`;

export const PageTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
`;
