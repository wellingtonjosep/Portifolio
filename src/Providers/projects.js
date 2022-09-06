import {  createContext, useState } from "react";

export const ProjectContext = createContext([]);

export const ProjectProviders = ({ children }) => {

    const [ projects, setProjects ] = useState([
        {
            name: "Kenzie Gastrobar",
            describe: "Site de gerenciamento de restaurantes",
            github: "https://github.com/tooruuh/kenzie_gastrobar",
            versel: "https://kenzie-gastrobar.vercel.app/"
        },
        {
            name: "Kenzie Food",
            describe: "Criação de um ecommerce no JavaScript sem framework",
            github: "https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-tiagokp97/tree/master",
            versel: "https://api-kenziefood-m2-tiagokp97.vercel.app/"
        },
        {
            name: "Fake API",
            describe: "Criação de uma fake api utilizando a biblioteca Json Server",
            github: "https://github.com/wellingtonjosep/kenzie-gastrobar-API",
            versel: ""
        },
        {
            name: "Portfólio",
            describe: "Criação do meu portfólio pessoal",
            github: "https://github.com/wellingtonjosep/kenzie_gastrobar",
            versel: ""
        },
        {
            name: "Kenzie Hub",
            describe: "Site de organização de estudos",
            github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-wellingtonjosep",
            versel: "https://react-entrega-s2-kenzie-hub-wellingtonjosep.vercel.app/"
        },
    ])

    return (
        <ProjectContext.Provider
        value={{ projects }}
        >
        {children}
        </ProjectContext.Provider>
    );
}