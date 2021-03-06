import React, {Component} from 'react';
import './App.scss';
import {Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from "./Components/MainPage/MainPage";
import Enter from "./Components/Enter/Enter";
import Feedback from "./Components/Feedback/Feedback";
import UserAccount from "./Components/UserAccount/UserAccount";
import AppAPI from "./API/AppAPI";
import About from "./Components/About/About";
import MoreMaterials from "./Components/MoreMaterials/MoreMaterials";
import Privacy from "./Components/Privacy/Privacy";


class App extends Component<any, any>{

    constructor(props: any) {
        super(props);
        AppAPI.getInstance().initializeApp();
    }

    render() {

        return (
            <Provider store={store}>
                <div className="App">

                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route path="/enter" component={Enter} />
                            <Route path="/feedback" component={Feedback} />
                            <Route path="/about" component={About} />
                            <Route exact path="/more-materials" component={MoreMaterials} />
                            <Route exact path="/user-account" component={UserAccount} />
                            <Route exact path="/privacy" component={Privacy} />
                        </Switch>
                    </BrowserRouter>

                </div>
            </Provider>
        );
    }
}

// TODO a "SQUISHY, get the mobile app" alert for small screens
// TODO About Project Section
// TODO what if the cookie uid is different than uid in the database?
// TODO ! refactor the whole app with good practices: css flexbox & class components

export default App;
