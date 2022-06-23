import Header from "../../components/header"
import DescriptionJob from "../../components/DescriptionJob";

import { Main } from "./styles"

import perfil from "../../assets/perfil.png"

function About () {
    return (
        <div>
        <Header page={"About"}/>
        <Main>
            <section className="container-main">
                <article>
                    <section className="container-image">
                        <img className="image" src={perfil} alt="foto perfil" />
                    </section>
                    <h2 className="name">Wellington José</h2>
                    <DescriptionJob/>
                </article>
                <article className="about">
                    <h3 className="name-about">Sobre mim</h3>
                    <p className="first-part">Gosto de Programar desde os meus 15 anos, 
                    mas conheci a programação muito antes.</p>
                    <p className="second-part">Sou muito criativo e gosto muito de realizar meus
                        projetos pessoais sejam eles sites, jogos, programas ou
                        até mesmo pixel artes. Sempre procuro cada dia
                        mais aprender e melhorar minhas habilidades
                        diariamente para mim a área da programação
                        é o melhor lugar para fazer isto.
                    </p>
                </article>
            </section>
        </Main>
        </div>
    )
}

export default About