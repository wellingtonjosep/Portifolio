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
        font-family: 'Inter';
        font-weight: 700;
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
        border-bottom: 3px solid rgb(255, 0, 0);
        margin-top: -3px;
    }

    .link {
        background-color: rgb(51,0,0,0.5);
        border-radius: 25px;
        padding: 6px;
        position: fixed;
        left: 10px;
        bottom: 10px;
        border: 1px solid #000;
        z-index: 1;
    }

    .image-link {
        width: 35px;
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
            font-family: 'Inter';
        }

        .li-tech {
            width: 100px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
            font-family: 'Inter';
        }

        .li-quali {
            width: 110px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
            font-family: 'Inter';
        }

        .li-pro {
            width: 70px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
            font-family: 'Inter';
        }
    }
`