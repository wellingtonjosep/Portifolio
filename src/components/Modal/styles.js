import styled from "styled-components"

export const Container = styled.section`
    position: absolute;
    height: 250px;
    width: 120px;
    right: 0px;
    opacity: 0.8;
    z-index: 20;
    border-radius: 0px 0px 0px 20px;
    background-color: rgb(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
    
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
        border-bottom: 3px solid #d3d3d3;
        background-color: #d3d3d3;
        font-weight: bold;
        color: #000;
    }

    @media (min-width: 900px) {
        display: none;
    }

`