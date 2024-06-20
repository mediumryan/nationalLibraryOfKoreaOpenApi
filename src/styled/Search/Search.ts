import styled from 'styled-components';

export const SearchItemWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    h2 {
        flex-basis: 25%;
        font-size: 1.5rem;
        margin-bottom: 10px;
        margin-right: 1rem;
    }
    input {
        flex-basis: 75%;
        padding: 10px;
        font-size: 1.2rem;
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        margin-bottom: 10px;
    }
`;

export const SubmitButton = styled.button`
    font-size: 1.5rem;
    border-radius: 4px;
    width: 100%;
    padding: 0.5rem 0;
    cursor: pointer;
`;

export const SearchResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    max-height: 60vh;
    overflow-y: auto;
`;

export const SearchResultsCard = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    color: rgba(160, 160, 250, 0.5);
    font-size: 1rem;
    width: 90%;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    #card-item-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    #card-item-title {
        flex-basis: 20%;
        width: 20%;
    }
    #card-item-colon {
        flex-basis: 5%;
        width: 5%;
    }
    #card-item-value {
        flex-basis: 75%;
        width: 75%;
        font-size: 0.9rem;
        word-break: break-all;
    }
    #card-item-value.url {
        color: #ff3d3d;
    }
`;
