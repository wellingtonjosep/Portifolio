import { Main } from "./styles"

import iconGit from "../../assets/icon_git.png"
import iconVersel from "../../assets/icon_versel.png"

import Button from "../Button"

function Project ({ project }) {
    return (
        <Main>
            <h3 className="title-project">{project.name}</h3>
            <section className="about-project">
                <p className="description-project">{project.describe}</p>
                <Button className={"button-git"}>
                    <a href={project.github} target="_blank">
                        <img className="icon-git" src={iconGit} alt="icone GitHub" />
                    </a>
                </Button>
                {
                    project.versel !== "" && (
                        <Button className={"button-versel"}>
                        <a href={project.versel} target={"_blank"}>
                            <img className="icon-versel" src={iconVersel} alt="icone Versel" />
                        </a>
                        </Button>
                    )
                }
            </section>
        </Main>
    )
}

export default Project