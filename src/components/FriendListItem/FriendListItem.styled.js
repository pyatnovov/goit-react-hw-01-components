import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
  border: 3px dotted black;
  padding-left: 10px;
  border-radius: 3px;
`

export const Status = styled.span`
   display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => {
    return props.isOnline ? "green" : "red";
    }};

`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
`

