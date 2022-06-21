import styled from "styled-components"

export const Main = styled.div`
    margin-bottom: 75px;
    
    .container-tech {
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center;
    }

    .tech-article {
        text-align: center;
        background-color: rgb(0,0,0,0.4);
        border-radius: 25px;
        margin-top: 10px;
        padding-bottom: 5px;
        width: 260px;
        margin-left: 10px;
    }

    .tech {
        width: 150px;
        padding: 25px;
    }

    .tech-name {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 18px;
    }

    .title-tech {
        color: rgb(255,0,0);
        margin-top: 50px;
        text-align: center;
        font-size: 27px;
        font-family: 'Inter';
    }

    @media (min-width: 450px) {

    }
`