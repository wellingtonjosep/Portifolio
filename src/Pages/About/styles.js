import styled from "styled-components"

export const Main = styled.section`
    text-align: center;

    .Container-image {
        position: relative;
        width: 210px;
        margin-left: auto;
        margin-right: auto;
    }

    .image {
        width: 160px;
        margin-top: 25px;
        border-radius: 50%;
    }

    .icon-header {
        position: absolute;
        width: 35px;
        bottom: 0px;
        right: 30px;
    }

    .name {
        color: #000;
        padding-top: 40px;
        text-align: center;
        font-size: 27px;
    }

    .name-job {
        display: block;
        color: #000;
        margin-left: auto;
        text-align: center;
    }

    .about {
        width: 320px;
        margin-left: auto;
        margin-right: auto;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    .name-about {
        font-size: 30px;
        color: rgb(255,0,0);
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .sub-title {
        margin-bottom: 10px;
    }

    .first-part {
        margin-bottom: 10px;
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        .container-image {

        }

        .image {

        }

        .container-main {
            display: flex;
            margin-top: 90px;
            background-color: rgb(0,0,0,0.2);
            height: 320px;
            padding: 5px;
            border-radius: 15px;
            box-shadow: 1px 3px 48px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 1px 3px 48px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 1px 3px 48px 0px rgba(0,0,0,0.75);
        }

        .about {
            text-align: left;
            margin-left: 50px;
            margin-top: 13px;
        }
    }

`