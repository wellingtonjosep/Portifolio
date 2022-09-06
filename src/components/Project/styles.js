import styled, { keyframes } from "styled-components";

export const Main = styled.article`

    text-align: center;
    position: relative;
    width: 278px;
    height: 202px;
    background-color: #D9D9D9;
    border-radius: 35px;
    margin-left: 15px;
    margin-bottom: 10px;

    .about-project {
        width: 210px;
        height: 100px;
        border-radius: 5px;
        background-color: #330000;
        margin-left: auto;
        margin-right: auto;
    }

    .description-project {
        color: #fff;
        margin-bottom: 25px;
        padding-top: 5px;
    }
    
    .title-project {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .icon-git {
        width: 27px;
        height: 20px;
        margin-right: 10px;
    }

    .icon-versel {
        height: 21px;
        width: 71.22px;
        border-radius: 5px;
    }

    .button-versel {
        bottom: 51px;
        right: 40px;
    }

    .button-git {
        left: 40px;
        bottom: 51px;
    }

    .button-git,.button-versel {
        border: none;
        background-color: #330000;
        position: absolute;
    }
`