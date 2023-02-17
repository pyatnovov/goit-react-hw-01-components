import styled from "styled-components";

export const List = styled.div`
    padding: 20px;
    border: 5px solid black;
    background-color: #148888;
    color:#000000;
`;
export const Icon = styled.img`
    width: 70px;
    height: 70px;
`

export const StatsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    list-style: none;
`
export const Item = styled.li`
    margin: 5px;
`
export const ItemQuantity = styled.span`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25px;
    color:red;
    
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    padding: 0;
    margin: 0;
`
export const UserInfo = styled.p`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    font-size: 21px;
`