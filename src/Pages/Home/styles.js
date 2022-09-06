import styled, {keyframes} from "styled-components"
export const animation = keyframes`
    from{border-left: 5px solid #000;}
    to{border-left: 0px solid #000;}
    from{border-right: 5px solid #000;}
`

export const Main = styled.section`
    text-align: center;
    margin-bottom: 75px;
    
    .container-image {
        position: relative;
        width: 210px;
        margin-left: auto;
        margin-right: auto;
        
    }

    .image {
        width: 160px;
        margin-top: 25px;
        border-radius: 25px;
        padding: 5px;
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
        font-size: 29px;
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

    .sub-title-tech {
        margin-top: 35px;
        margin-bottom: 20px;
        font-size: 22px;
        color: rgb(255,0,0);
    }

    .container-icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .icon-tech {
        width: 60px;
        margin-left: 15px;
        margin-top: 10px;
    }

    .icon-web {
        display: none;
    }

    .icon-server {
        display: none;
    }

    @media (min-width: 768px) {
        .container-image {
            width: 250px;
        }

        .image {
            width: 200px;
        }

        .icon-header {
            width: 40px;
        }

        .name {
            font-size: 32px;
        }

        .icon-tech {
            width: 70px;
        }

        .icon-web {
            display: block;
            position: absolute;
            z-index: -2;
            width: 120px;
            left: 340px;
            top: 80px;
        }

        .icon-server {
            display: block;
            position: absolute;
            z-index: -2;
            width: 130px;
            left: -210px;
            top: 80px;
        }

    }

`