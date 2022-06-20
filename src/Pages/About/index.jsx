import Header from "../../components/header"
import iconProfile from "../../assets/icon_profile.png"
import Typewriter from "typewriter-effect";
import { Main } from "./styles"

function About () {
    return (
        <div>
        <Header page={"About"}/>
        <Main>
            <article>
                <section className="Container-image">
                    <img className="image" src="https://media-exp2.licdn.com/dms/image/C4D03AQEpqGUjNJPBqg/profile-displayphoto-shrink_800_800/0/1641216314077?e=1661385600&v=beta&t=asvmSu_aNfWtkpyWHm6V1e2AnPMU2Hm_PLpYsthT02c" alt="foto perfil" />
                    <img className="icon-header" src={iconProfile} alt="icone de um computador" />
                </section>
                <h2 className="name">Wellington José</h2>
                <p className="name-job" style={{ color: 'Black', fontWeight: 'bold', fontSize:'18px' }}>
                <Typewriter
                    words={['Desenvolvedor Front-end', 'Desenvolvedor Back-end', 'Desenvolvedor Full-Stack']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={100}
                />
                </p>
            </article>
            <article className="about">
                <h3 className="sub-title">Olá, Meu nome é Wellington</h3>
                <p className="first-part">Gosto de Programar desde os meus 15 anos, 
                mas conheci a programação muito antes</p>
                <p className="second-part">Sou muito criativo e gosto muito de realizar meus
                    projetos pessoais sejam eles sites, jogos, programas ou
                    até mesmo pixel artes. Sempre procuro cada dia
                    mais aprender e melhorar minhas habilidades
                    diariamente para mim a área da programação
                    é o melhor lugar para fazer isto.
                </p>
            </article>
        </Main>
        </div>
    )
}

export default About