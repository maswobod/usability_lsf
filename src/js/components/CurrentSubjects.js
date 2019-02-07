import React from "react";
import {Grid, Icon} from "semantic-ui-react";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class CurrentSubjects extends React.Component {

    @observable
    showContent = true;


    toggleContent() {
        this.showContent = !this.showContent;

    }

    render() {
        return (
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <div className="Card">
                    <div className="Card-header" onClick={this.toggleContent.bind(this)}>
                        <Icon name={this.showContent ? "triangle down" : "triangle right"}/>
                        Aktuelle Fächer
                        <div className="right-header">ECTS</div>
                    </div>
                    <div className={this.showContent ? "" : "hidden"}>
                        <div>
                            <div className={"left-content"}>
                                Studioprojekt 1
                            </div>

                            <div className={"right-content"}>
                                5
                            </div>
                        </div>
                        <div>
                            <div className={"left-content"}>
                                Film
                            </div>

                            <div className={"right-content"}>
                                5
                            </div>
                        </div>
                        <div>
                            <div className={"left-content"}>
                                Informatik
                            </div>

                            <div className={"right-content"}>
                                5
                            </div>
                        </div>
                        <div>
                            <div className={"left-content"}>
                                Java
                            </div>

                            <div className={"right-content"}>
                                5
                            </div>
                        </div>
                        <div>
                            <div className={"left-content"}>
                                English
                            </div>

                            <div className={"right-content"}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </Grid.Column>
        );
    }
}

export default CurrentSubjects;