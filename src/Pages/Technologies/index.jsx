import { useContext } from "react"
import Header from "../../components/header"
import Information from "../../components/Information"
import { TechnologiesContext } from "../../Providers/technologies"

import { Main } from "./styles"

function Technologies () {

    const { info } = useContext(TechnologiesContext)

    return (
        <div>
        <Header page="Technologies"/>
        <Main>
            <h2 className="title-tech">Tecnologias</h2>
            <section className="container-tech">
                {
                    info.map((technologie, index) => {
                        return <Information className={"tech-article"} img={"tech"} p={"tech-name"} key={index} technologie={technologie}/>
                    })
                }
            </section>
        </Main>
        </div>
    )
}

export default Technologies