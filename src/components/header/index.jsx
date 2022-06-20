import { AiOutlineBars } from "react-icons/ai"
import Button from "../Button"
import { HeaderStyle } from "./styles"
import Li from "../Li";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

function Header ({ page }) {
    const history = useHistory()

    function redirect () {
        history.push("/")
    }
    return (
        <HeaderStyle>
            <h1 onClick={() => redirect()}>&lt;Well/Dev&gt;</h1>
            <nav>
                <ul>
                    <Link to="/About">
                        <Li className={page === "About" ? 'red li-about' : 'li-about'}>Sobre</Li>
                    </Link>
                    <Link to="/Technologies">
                        <Li className={page === "Technologies" ? 'red li-tech' : 'li-tech'}>Tecnologias</Li>
                    </Link>
                    <Link to="/Qualifications">
                        <Li className={page === "Qualifications" ? 'red li-quali' : 'li-quali'}>Qualificações</Li>
                    </Link>
                    <Link to="/Projects">
                        <Li className={page === "Projects" ? 'red li-pro' : 'li-pro'}>Projetos</Li>
                    </Link>
                </ul>
            </nav>
            <Button>
                <AiOutlineBars className="icon"/>
            </Button>
        </HeaderStyle>
    )
}

export default Header