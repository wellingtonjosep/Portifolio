import styled from "styled-components"

export const Container = styled.section`
    position: absolute;
    height: 100vh;
    width: 120px;
    right: 0px;
    background-color: #000;
    
    .button-modal {
        background-color: #000;
        border: none;
        margin-top: 26px;
        margin-left: 46px;
    }

    .icon {
        font-size: 28px;
        color: #fff;
        cursor: pointer;
    }

    .nav-modal {
        height: 100%;
    }

    .li-modal {
        color: #fff;
        margin-top: 22px;
        text-align: center;
    }

    .red-modal {
        border-bottom: 3px solid red;
        background-color: red;
    }

    @media (min-width: 900px) {
        display: none;
    }

`