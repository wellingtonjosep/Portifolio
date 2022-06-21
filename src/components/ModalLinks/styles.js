import styled, { keyframes } from "styled-components";

export const animation = keyframes`
    from{left: -150px}
    to{left: 70px}
`

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
    left: 70px;
    z-index: 2;
    background-color: rgb(51,0,0,0.8);
    width: 150px;
    height: 50px;
    text-align: center;
    border-radius: 25px;
    animation: ${animation} 1.5s;
    animation-fill-mode: forwards;

    .link-modal {
        color: #fff;
    }

`