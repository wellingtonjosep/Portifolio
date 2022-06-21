import Button from "../Button"
import Li from "../Li";
import Modal from "../Modal";
import ModalLinks from "../ModalLinks";
import { TechnologiesContext } from "../../Providers/technologies";

import iconLink from "../../assets/icon_link.png"

import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai"

import { HeaderStyle } from "./styles"
import { useContext } from "react";

function Header ({ page }) {

    const [modal, setModal] = useState(false)

    const { isOpen, setIsOpen } = useContext(TechnologiesContext)

    const history = useHistory()

    function redirect () {
        history.push("/")
    }

    return (
        <HeaderStyle>
            <h1 className="logo" onClick={() => redirect()}>&lt;Well/Dev&gt;</h1>
            <nav className="nav-header">
                <ul className="ul-header">
                    <Link className="link-header" to="/About">
                        <Li className={page === "About" ? 'red li-about' : 'li-about'}>Sobre</Li>
                    </Link>
                    <Link className="link-header" to="/Technologies">
                        <Li className={page === "Technologies" ? 'red li-tech' : 'li-tech'}>Tecnologias</Li>
                    </Link>
                    <Link className="link-header" to="/Qualifications">
                        <Li className={page === "Qualifications" ? 'red li-quali' : 'li-quali'}>Qualificações</Li>
                    </Link>
                    <Link className="link-header" to="/Projects">
                        <Li className={page === "Projects" ? 'red li-pro' : 'li-pro'}>Projetos</Li>
                    </Link>
                </ul>
            </nav>
            <Button className={"button-header"}>
                <AiOutlineBars onClick={() => setModal(true)} className="icon"/>
            </Button>
            <Button onClick={() => setIsOpen(!isOpen)} className="link">
                    <img className="image-link" src={iconLink} alt="imagem de um link" />
            </Button>
            {
                modal === true && <Modal page={page} setModal={setModal}/>
            }
            {
                isOpen === true && <ModalLinks/>
            }
        </HeaderStyle>
    )
}

export default Header