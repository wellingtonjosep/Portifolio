import Header from "../../components/header"
import motion from "framer-motion"

import certificate from "../../assets/certificado_Front-end.png"

import { Main } from "./styles"
function Qualifications () {
    return (
        <div>
        <Header page="Qualifications"/>
        <Main>

            <section className="container-certificate">
                <h2 className="title-certificate">Qualificações</h2>
                <img className="certificate" src={certificate} alt="certificado Kenzie Academy Brasil 1000 horas" />
                <p className="text-certificate">Curso de 1.000 horas de Desenvolvimento Front end além de soft skills disponíveis para o mercado de trabalho. Entre as linguagens tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), TypeScript, React e diversas bibliotecas.</p>
            </section>


            <article className="container-experiences">
                <h2 className="title-experiences">Experiências</h2>
                <section className="experiences">
                    <h3 className="office-experiences">Aprendiz</h3>
                    <h4 className="name-experiences">Supermercado Sttylo</h4>
                    <p className="time-experiences">mar de 2019 - abr de 2020 · 1 ano 2 meses</p>
                </section>
            </article>
        </Main>
        </div>
    )
}

export default Qualifications