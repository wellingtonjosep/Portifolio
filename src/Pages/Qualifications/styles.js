import styled from "styled-components";


export const Main = styled.section`

    .container-certificate {
        text-align: center;
    }

    .title-certificate {
        color: rgb(255,0,0);
        font-size: 28px;
        text-align: center;
        margin-top: 50px;
    }

    .certificate {
        width: 100%;
        margin-top: 10px;
        max-width: 550px;
        border: 1px solid #000;
        border-radius: 25px;
        padding: 5px;
    }

    .text-certificate {
        max-width: 550px;
        margin-left: auto;
        margin-right: auto;
        font-family: sans-serif;
        margin-top: 10px;
        background-color: rgb(0,0,0,0.5);
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
        color: rgb(0,0,0);
    }

    .container-experiences {
        
    }

    .title-experiences {
        color: rgb(255,0,0);
        font-size: 28px;
        text-align: center;
        margin-top: 30px;
    }

    .experiences {
        font-family: sans-serif;
        margin-top: 5px;
        background-color: rgb(255,0,0,0.4);
        width: 100%;
        max-width: 550px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;

        .container-experiences {
            margin-top: 20px;
            margin-left: 100px;
        }
    }
`