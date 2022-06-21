import { createContext, useState } from "react";

export const TechnologiesContext = createContext([]);

export const TechnologiesProviders = ({ children }) => {
    const [info, setInfo] = useState([
        {
            name: "JavaScript: A primeira vez que tive contato com JavaScript eu estava no primeiro modulo da Kenzie Academy Brasil, foi uma experiência ótima.",
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        },
        {
            name: "React: o primeiro contato que tive com React foi no terceiro modulo da Kenzie Academy Brasil foi um framework divisor de águas para minhas paginas no front-end",
            url: "https://cdn-icons.flaticon.com/png/512/520/premium/520890.png?token=exp=1655774822~hmac=0e59491aa8ba3becfe42f631017a8450"
        },
        {
            name: "CSS: o primeiro contato que tive com o css foi com 15 anos, para mim foi o que me fez entrar para área de programação era bem complexa no começo, mas depois peguei o jeito",
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
        },
        {
            name: "TypeScript: o primeiro contato que tive com TypeScript foi na Kenzie Academy Brasil no segundo modulo, uma otima linguagem de programação",
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
        },
        {
            name: "Python: bom o meu primeiro contato com python foi aos 15 anos, mas só iniciei com 16 anos. Por ser uma linguagem de programação bem simples comparado as outras foi bem mais rápido o aprendizado.",
            url: "https://cdn-icons-png.flaticon.com/512/1387/1387537.png"
        },
        {
            name: "Docker: O primeiro contato que tive com o Docker foi no quarto modulo da Kenzie Academy Brasil, foi uma boa experiência.",
            url: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
        },
        {
            name: "PostgreSQL: O primeiro contato que tive com o PostgreeSQL foi no quarto modulo da Kenzie Academy Brasil, foi a primeira experiência que tive operando com Banco de Dados.",
            url: "https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png"
        },
        {
            name: "HTML: A primeira vez que tive contato com HTML foi assistindo alguns vídeos na internet, achei bem complicado, mas depois que me aprofundei mais no assunto se tornou algo proveitoso.",
            url: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
        },
        {
            name: "NodeJS: O primeiro contato que tive com NodeJS foi no quarto modulo da Kenzie Academy Brasil, foi a primeira vez que fiz uma API do zero, já tinha feito uma API antes, mas com biblioteca do React.",
            url: "https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png"
        },
        {
            name: "Git: A primeira vez que tive contato com o GIT foi no primeiro modulo da Kenzie Academy Brasil. Logo na primeira semana foi bem complicado operar no terminal, mas foi algo essencial para começar programar sites.",
            url: "https://cdn-icons.flaticon.com/png/512/4494/premium/4494748.png?token=exp=1655774931~hmac=ff078590abe9a8ac4669a3c3b1cc5958"
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