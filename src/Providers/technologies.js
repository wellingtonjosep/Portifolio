import { createContext, useState } from "react";

export const TechnologiesContext = createContext([]);

export const TechnologiesProviders = ({ children }) => {
    const [info, setInfo] = useState([
        {
            name: "JavaScript",
            description: "JavaScript: A primeira vez que tive contato com JavaScript eu estava no primeiro modulo da Kenzie Academy Brasil, foi uma experiência ótima.",
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        },
        {
            name: "React",
            description: "React: o primeiro contato que tive com React foi no terceiro modulo da Kenzie Academy Brasil foi um framework divisor de águas para minhas paginas no front-end",
            url: "https://raw.githubusercontent.com/wellingtonjosep/Portifolio/main/src/assets/icon_react.png"
        },
        {
            name: "CSS",
            description: "CSS: o primeiro contato que tive com o css foi com 15 anos, para mim foi o que me fez entrar para área de programação era bem complexa no começo, mas depois peguei o jeito",
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
        },
        {
            name: "TypeScript",
            description: "TypeScript: o primeiro contato que tive com TypeScript foi na Kenzie Academy Brasil no segundo modulo, uma otima linguagem de programação",
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
        },
        {
            name: "Python",
            description: "Python: bom o meu primeiro contato com python foi aos 15 anos, mas só iniciei com 16 anos. Por ser uma linguagem de programação bem simples comparado as outras foi bem mais rápido o aprendizado.",
            url: "https://cdn-icons-png.flaticon.com/512/1387/1387537.png"
        },
        {
            name: "Docker",
            description: "Docker: O primeiro contato que tive com o Docker foi no quarto modulo da Kenzie Academy Brasil, foi uma boa experiência.",
            url: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
        },
        {
            name: "PostgreSQL",
            description: "PostgreSQL: O primeiro contato que tive com o PostgreeSQL foi no quarto modulo da Kenzie Academy Brasil, foi a primeira experiência que tive operando com Banco de Dados.",
            url: "https://a0.anyrgb.com/pngimg/1698/716/postgresql-logo-objectrelational-database-database-symbol-relational-model-relational-database-management-system-cms-the-logo-sql-postgresql-free-software.png"
        },
        {
            name: "HTML",
            description: "HTML: A primeira vez que tive contato com HTML foi assistindo alguns vídeos na internet, achei bem complicado, mas depois que me aprofundei mais no assunto se tornou algo proveitoso.",
            url: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
        },
        {
            name: "NodeJS",
            description: "NodeJS: O primeiro contato que tive com NodeJS foi no quarto modulo da Kenzie Academy Brasil, foi a primeira vez que fiz uma API do zero, já tinha feito uma API antes, mas com biblioteca do React.",
            url: "https://raw.githubusercontent.com/wellingtonjosep/Portifolio/main/src/assets/icon_nodejs.png"
        },
        {
            name: "Git",
            description: "Git: A primeira vez que tive contato com o git foi no primeiro modulo da Kenzie Academy Brasil. Logo na primeira semana foi bem complicado operar no terminal, mas foi algo essencial para começar programar sites.",
            url: "https://raw.githubusercontent.com/wellingtonjosep/Portifolio/main/src/assets/icon_git.png"
        }
    ])
    return (
        <TechnologiesContext.Provider
          value={{ info }}
        >
          {children}
        </TechnologiesContext.Provider>
      );
}