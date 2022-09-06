import styled, {keyframes} from "styled-components";

export const animation1 = keyframes`
    from{transform: translateX(-40px)}
    to{transform: translateX(0px)}
`

export const animation2 = keyframes`
    from{transform: translateX(0px)}
    to{transform: translateX(40px)}
`
export const animation3 = keyframes`
    from{transform: translateX(-40px)}
    to{transform: translateX(0px)}
`

export const Main = styled.section`
    display: none;
    @media (min-width:768px) {
        display: block;
        width: 100%;
        position: fixed;
        bottom: -40px;
        padding: 0px;
        margin: 0px;
        z-index: -1;

        .wave-svg {
            width: 100vw;
        }

        .wave-1 {
            animation: ${animation1} 2s ease-in-out infinite alternate;
        }

        .wave-2 {
            animation: ${animation2} 2s ease-in-out infinite alternate;
        }

        .wave-3 {
            height: 50px;
            animation: ${animation3} 2s ease-in-out infinite alternate;
        } 
    
    }
`