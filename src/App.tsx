import React from 'react';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {TodosPages} from "./pages/TodosPages";
import {AboutPages} from "./pages/AboutPages";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodosPages} exact path='/'/>
                    <Route component={AboutPages} exact path='/about'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default App;
