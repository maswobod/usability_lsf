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
import TopBar from "../components/TopBar";
import StudentInfo from "../components/StudentInfo";

@observer
class Layout extends React.Component {

    @observable isMobile = false;
    @observable student = {};

    componentWillMount() {
        this.student = {
            name: "Melanie Mustermwd",
            matrikel_number: "293209",
            semester: 4,
            study: "Medien Design und digitale Gestaltung",
            spo_version: "SPO 11.22A",
            subjects: [
                {
                    semester: 1,
                    ects: 5,
                    name: "Grundlagen Gestaltung",
                    number: 1,
                    passed: true,
                    grade: 1.9
                }, {
                    semester: 1,
                    ects: 5,
                    name: "Fotografieren",
                    number: 2,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 1,
                    ects: 5,
                    name: "Interaction Design",
                    number: 3,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 1,
                    ects: 5,
                    name: "Lineare Algebra",
                    number: 4,
                    passed: true,
                    grade: 1.7
                }, {
                    semester: 1,
                    ects: 10,
                    name: "Programmieren 1",
                    number: 5,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 3,
                    ects: 10,
                    name: "User Experience Design",
                    number: 6,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 2,
                    ects: 10,
                    name: "Motion Design",
                    number: 7,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 2,
                    ects: 5,
                    name: "Programmieren 2",
                    number: 8,
                    passed: true,
                    grade: 1.5
                }, {
                    semester: 2,
                    ects: 5,
                    name: "Mathematik für Designer",
                    number: 9,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 3,
                    ects: 10,
                    name: "Animation",
                    number: 10,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 3,
                    ects: 5,
                    name: "Film",
                    number: 11,
                    passed: true,
                    grade: 2.0
                }, {
                    semester: 3,
                    ects: 5,
                    name: "Phisical Computing",
                    number: 12,
                    passed: true,
                    grade: 1.0
                }, {
                    semester: 3,
                    ects: 5,
                    name: "Webentwicklung 1",
                    number: 13,
                    passed: true,
                    grade: 2.0
                }, {
                    semester: 3,
                    ects: 5,
                    name: "Software Engineering",
                    number: 14,
                    passed: true,
                    grade: 1.5
                },
                {
                    semester: 3,
                    ects: 5,
                    name: "Usability Engineering",
                    number: 3245,
                    passed: true,
                    grade: 1.2
                }
            ]
        };
    };

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
                        <Grid.Row className={"top-bar"}>
                            <TopBar student={this.student} mobile={this.isMobile}/>
                        </Grid.Row>
                        <Grid.Row width={16} className="mobile-container">
                            <Switch>
                                <Route exact path="/aktuelles" component={Aktuelles}/>
                                <Route exact path="/" component={Aktuelles}/>
                                <Route exact path="/ects" component={Ects}/>
                                <Route exact path="/noten" component={Noten}/>
                                <Route exact path="/downloads" component={Downloads}/>
                            </Switch>
                        </Grid.Row>
                        <Navigation location={location}  mobile={this.isMobile}/>
                    </Grid>
                    :

                    <Grid centered columns={2}>
                        <Grid.Row className={"top-bar"}>
                            <TopBar student={this.student}  mobile={this.isMobile}/>
                        </Grid.Row>
                        <Grid.Column width={2} className="side-nav-container">
                            <Navigation location={location}  mobile={this.isMobile}/>
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