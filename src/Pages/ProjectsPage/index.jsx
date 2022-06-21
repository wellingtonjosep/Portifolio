import Header from "../../components/header"
import { Main } from "./styles"

import iconGit from "../../assets/icon_git.png"
import iconVersel from "../../assets/icon_versel.png"
import Button from "../../components/Button"

function Projects () {
    return (
        <div>
        <Header page="Projects"/>
        <Main>
            <h2 className="title-projects">Meus Projetos</h2>
            <section className="container-projects">
                <article className="project">
                    <h3 className="title-project">Kenzie Gastrobar</h3>
                    <section className="about-project">
                        <p className="description-project">Site de gerenciamento de restaurantes.</p>
                        <Button className={"button-git"}>
                            <a href="https://github.com/tooruuh/kenzie_gastrobar" target="_blank">
                                <img className="icon-git" src={iconGit} alt="icone GitHub" />
                            </a>
                        </Button>
                        <Button className={"button-versel"}>
                            <a href="https://kenzie-gastrobar.vercel.app/" target={"_blank"}>
                                <img className="icon-versel" src={iconVersel} alt="icone Versel" />
                            </a>
                        </Button>
                    </section>
                </article>

                <article className="project">
                    <h3 className="title-project">Kenzie Food</h3>
                    <section className="about-project">
                        <p className="description-project">Criação de um ecommerce no JavaScript Vanila.</p>
                        <Button className={"button-git"}>
                            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-tiagokp97/tree/master" target={"_blank"}>
                                <img className="icon-git" src={iconGit} alt="icone GitHub" />
                            </a>
                        </Button>
                        <Button className={"button-versel"}>
                            <a href="https://api-kenziefood-m2-tiagokp97.vercel.app/" target="_blank">
                                <img className="icon-versel" src={iconVersel} alt="icone Versel" />
                            </a>
                        </Button>
                    </section>
                </article>

                <article className="project">
                    <h3 className="title-project">Fake API</h3>
                    <section className="about-project">
                        <p className="description-project">Criação de uma fake api utilizando a biblioteca Json Server.</p>
                        <Button className={"button-git"}>
                            <a href="https://github.com/wellingtonjosep/kenzie-gastrobar-API" target="_blank">
                                <img className="icon-git" src={iconGit} alt="icone GitHub" />
                            </a>
                        </Button>
                    </section>
                </article>

                <article className="project">
                    <h3 className="title-project">Portfólio</h3>
                    <section className="about-project">
                        <p className="description-project">Criação do meu portfólio pessoal.</p>
                        <Button className={"button-git"}>
                            <a href="https://github.com/wellingtonjosep/kenzie_gastrobar" target="_blank">
                                <img className="icon-git" src={iconGit} alt="icone GitHub" />
                            </a>
                        </Button>
                    </section>
                </article>

            </section>
        </Main>
        </div>
    )
}

export default Projects