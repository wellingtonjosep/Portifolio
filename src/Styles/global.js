import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        padding: 0px;
        list-style-type: none;
        text-decoration: none;
    }


    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;