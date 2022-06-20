import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    background: rgb(0, 0, 0);
    height: 80px;
    box-shadow: 0px 8px 5px 0px rgba(255,255,255,0.75);
    -webkit-box-shadow: 0px 8px 5px 0px rgba(255,255,255,0.75);
    -moz-box-shadow: 0px 8px 5px 0px rgba(255,255,255,0.75);

    h1 {
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

    nav {
        display: none;
    }

    button {
        margin-left: auto;
        margin-right: 10px;
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
        border-bottom: 3px solid red;
        margin-top: -5px;
    }

    
    @media (min-width:900px) {
        button {
            display: none;
        }
        
        nav {
            display: flex;
            width: 100%;
            margin-left: 5%;
            margin-right: 5%;
        }

        ul {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        a {
            height: 30px;
            color: #fff;
            text-align: center;
            margin-top: 31px;
            margin-left: 10%;
            margin-right: 5%;
        }

        li {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            height: 28px;
        }

        .li-about {
            width: 50px;
        }

        .li-tech {
            width: 100px;
        }

        .li-quali {
            width: 110px;
        }

        .li-pro {
            width: 70px;
        }
    }
`