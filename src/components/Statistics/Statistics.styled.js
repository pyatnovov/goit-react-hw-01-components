import styled from "styled-components";


export const Section = styled.section`
    margin: 10px;
    border: 5px solid black;
    padding: 20px;
`
export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`
export const Item = styled.li`
    margin: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:5px;
    font-size: 25px;
    border: 4px solid black;
    padding: 10px;
`

export const ItemInfo = styled.span`

`