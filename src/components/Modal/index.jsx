import Li from "../Li"
import Button from "../Button"

import { AiOutlineBars } from "react-icons/ai"
import { Link } from "react-router-dom"

import { Container } from "./styles"

function Modal ({page, setModal}) {
    return (
        <Container>
            <nav className="nav-modal">
                <Button className={"button-modal"}>
                    <AiOutlineBars onClick={() => setModal(false)} className="icon"/>
                </Button>
                <ul>
                    <Link to="/About">
                        <Li className={page === "About" ? 'red-modal li-about li-modal' : 'li-about li-modal'}>Sobre</Li>
                    </Link>
                    <Link to="/Technologies">
                        <Li className={page === "Technologies" ? 'red-modal li-tech li-modal' : 'li-tech li-modal'}>Tecnologias</Li>
                    </Link>
                    <Link to="/Qualifications">
                        <Li className={page === "Qualifications" ? 'red-modal li-quali li-modal' : 'li-quali li-modal'}>Qualificações</Li>
                    </Link>
                    <Link to="/Projects">
                        <Li className={page === "Projects" ? 'red-modal li-pro li-modal' : 'li-pro li-modal'}>Projetos</Li>
                    </Link>
                </ul>
            </nav>
        </Container>
    )
}

export default Modal