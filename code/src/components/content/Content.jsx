import React from "react";
import {Switch, Route} from 'react-router-dom';
import Start from '../start/Start';
import Play from '../play/Play';

const Content = () => {
    return (
        <main>
            <Switch>
                <Route path="/jogodavelha/" exact>
                    <Start />
                </Route>
                <Route path="/jogodavelha/jogar/">
                    <Play />
                </Route>
            </Switch>
        </main>
    )
}

export default Content;