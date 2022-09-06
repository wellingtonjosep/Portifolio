import { Main } from "./styles"

import Header from "../../components/header"
import Project from "../../components/Project"
import { useContext } from "react"
import { ProjectContext } from "../../Providers/projects"
import Waves from "../../components/Waves"

function Projects () {

    const { projects } = useContext(ProjectContext)

    return (
        <div>
        <Header page="Projects"/>
        <Main>
            <h2 className="title-projects">Meus Projetos</h2>
            <section className="container-projects">

                {
                    projects.map((project, index) => {
                        return <Project project={project} key={index}/>
                    })
                }

            </section>
            <Waves/>
        </Main>
        </div>
    )
}

export default Projects