import Header from "../../components/header"
import { Main } from "./styles"
import DescriptionJob from "../../components/DescriptionJob";

function About () {
    return (
        <div>
        <Header page={"About"}/>
        <Main>
            <section className="container-main">
                <article>
                    <section className="container-image">
                        <img className="image" src="https://media-exp2.licdn.com/dms/image/C4D03AQEpqGUjNJPBqg/profile-displayphoto-shrink_800_800/0/1641216314077?e=1661385600&v=beta&t=asvmSu_aNfWtkpyWHm6V1e2AnPMU2Hm_PLpYsthT02c" alt="foto perfil" />
                    </section>
                    <h2 className="name">Wellington José</h2>
                    <DescriptionJob/>
                </article>
                <article className="about">
                    <h3 className="name-about">SOBRE MIM</h3>
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