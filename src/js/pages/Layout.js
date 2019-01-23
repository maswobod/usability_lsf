import React from "react"

import 'semantic-ui-css/semantic.min.css';
import '../../stylesheets/App.scss';

import {Route, Router, Switch} from 'react-router-dom';
import {observer} from "mobx-react";
import {Grid} from "semantic-ui-react";
import history from "../helper/hashHistory";
import Ects from "./Ects";
import Aktuelles from "./Aktuelles";
import Noten from "./Noten";
import Navigation from "../components/Navigation";
import {observable} from "mobx";
import Downloads from "./Downloads";

@observer
class Layout extends React.Component {

    @observable isMobile = false;

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
        this.isMobile = window.innerWidth < 768;
    }


    render() {
        const {location} = this.props;

        return (
            <Router history={history}>
                {this.isMobile ?

                    <Grid>
                        <Grid.Row width={16} className="mobile-container">
                            <Switch>
                                <Route exact path="/aktuelles" component={Aktuelles}/>
                                <Route exact path="/" component={Aktuelles}/>
                                <Route exact path="/ects" component={Ects}/>
                                <Route exact path="/noten" component={Noten}/>
                                <Route exact path="/downloads" component={Downloads}/>
                            </Switch>
                        </Grid.Row>
                        <Navigation location={location}/>
                    </Grid>
                    :

                    <Grid centered columns={2}>
                        <Grid.Column width={2} className="side-nav-container">
                            <Navigation location={location}/>
                        </Grid.Column>

                        <Grid.Column width={14}>
                            <Switch>
                                <Route exact path="/aktuelles" component={Aktuelles}/>
                                <Route exact path="/" component={Aktuelles}/>
                                <Route exact path="/ects" component={Ects}/>
                                <Route exact path="/noten" component={Noten}/>
                                <Route exact path="/downloads" component={Downloads}/>
                            </Switch>
                        </Grid.Column>
                    </Grid>
                }
            </Router>
        );
    }
}

export default Layout