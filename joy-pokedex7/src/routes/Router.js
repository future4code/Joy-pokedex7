import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import Detalhes from "../pages/Detalhes";

import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

const Router = () => {
    return <BrowserRouter>
        <Switch>

            <Route exact path={"/"}>
                <Home />
            </Route>

            <Route exact path={"/detalhes"}>
                <Detalhes />
            </Route>

            <Route exact path={"/pokedex"}>
                <Pokedex />
            </Route>
        </Switch>
    </BrowserRouter>
};

export default Router;
