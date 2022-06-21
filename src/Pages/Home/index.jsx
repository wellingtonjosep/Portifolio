import Header from "../../components/header"
import iconProfile from "../../assets/icon_profile.png"
import DescriptionJob from "../../components/DescriptionJob"
import Button from "../../components/Button"
import { TechnologiesContext } from "../../Providers/technologies"
import { useContext } from "react"

import { Main } from "./styles"

import css from "../../assets/icon_css.png"
import javascript from "../../assets/icon_javascript.png"
import typescript from "../../assets/icon_typescript.png"
import python from "../../assets/icon_python.png"
import react from "../../assets/icon_react.png"
import docker from "../../assets/icon_docker.png"
import sql from "../../assets/icon_sql.png"
import html from "../../assets/icon_html.png"
import node from "../../assets/icon_nodejs.png"
import server from "../../assets/icon_server.png"
import web from "../../assets/icon_web.png"
import git from "../../assets/icon_git.png"

function Home() {

    return (
        <div>
        <Header/>
        <Main>
            <section>
                <section className="container-image">
                    <img className="image" src="https://media-exp2.licdn.com/dms/image/C4D03AQEpqGUjNJPBqg/profile-displayphoto-shrink_800_800/0/1641216314077?e=1661385600&v=beta&t=asvmSu_aNfWtkpyWHm6V1e2AnPMU2Hm_PLpYsthT02c" alt="foto perfil" />
                    <img className="icon-header" src={iconProfile} alt="icone de um computador" />
                    <img className="icon-server" src={web} alt="foto de um site" />
                    <img className="icon-web" src={server} alt="foto de um servidor" />
                </section>
                <h2 className="name">Wellington José</h2>
                <DescriptionJob/>
            </section>
            <h4 className="sub-title-tech">Tecnologias que já trabalhei</h4>
            <section className="container-icons">
                <img className="icon-tech" src={javascript} alt="logo do javascript" />
                <img className="icon-tech" src={react} alt="logo do react" />
                <img className="icon-tech" src={python} alt="logo do python" />
                <img className="icon-tech" src={typescript} alt="logo do typescript" />
                <img className="icon-tech" src={css} alt="logo do css" />
                <img className="icon-tech" src={docker} alt="logo do docker" />
                <img className="icon-tech" src={sql} alt="logo do sql" />
                <img className="icon-tech" src={html} alt="logo do html" />
                <img className="icon-tech" src={node} alt="logo do nodejs" />
                <img className="icon-tech" src={git} alt="logo do GitHub" />
            </section>
        </Main>
        </div>
    )
}

export default Home