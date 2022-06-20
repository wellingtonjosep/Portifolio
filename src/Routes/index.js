import { Route, Switch} from "react-router-dom"

import About from "../Pages/About"
import Home from "../Pages/Home"
import Projects from "../Pages/ProjectsPage"
import Qualifications from "../Pages/Qualifications"
import Technologies from "../Pages/Technologies"

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/About">
                <About/>
            </Route>

            <Route exact path="/Projects">
                <Projects/>
            </Route>

            <Route exact path="/Qualifications">
                <Qualifications/>
            </Route>

            <Route exact path="/Technologies">
                <Technologies/>
            </Route>
        </Switch>
    )
}