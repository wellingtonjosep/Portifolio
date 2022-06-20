import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    background: rgb(0, 0, 0);
    height: 80px;

    .logo {
        color: rgb(255, 255, 255);
        justify-self: flex-start;
        cursor: pointer;
        font-size: 1.5rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-left: 24px;
        font-weight: bold;
        text-decoration: none;
    }

    .nav-header {
        display: none;
    }

    .button-header {
        margin-left: auto;
        margin-right: 40px;
        width: 40px;
        height: 30px;
        margin-top: 26px;
        border: none;
        background-color: #000;
    }

    .icon {
        font-size: 28px;
        color: #fff;
        cursor: pointer;
    }

    .red {
        border-bottom: 3px solid #d3d3d3;
        margin-top: -3px;
    }

    
    @media (min-width:900px) {
        .button-header {
            display: none;
        }
        
        .nav-header {
            display: flex;
            width: 100%;
            margin-left: 5%;
            margin-right: 5%;
        }

        .ul-header {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .link-header {
            height: 30px;
            color: #fff;
            text-align: center;
            margin-top: 31px;
            margin-left: 10%;
            margin-right: 5%;
        }

        .li-about {
            width: 50px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
        }

        .li-tech {
            width: 100px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
        }

        .li-quali {
            width: 110px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
        }

        .li-pro {
            width: 70px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
        }
    }
`