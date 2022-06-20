import styled from "styled-components"

export const Main = styled.section`
    background-color: #d3d3d3;
    height: 100vh;
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
    }

    .sub-title {
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .first-part {
        margin-bottom: 5px;
    }

`