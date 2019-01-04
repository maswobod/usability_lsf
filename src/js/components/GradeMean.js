import React from "react";
import {Button, Grid, Header, Icon, Modal} from "semantic-ui-react";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class GradeMean extends React.Component {

    @observable modalOpen = false;

    static calculateMeanGrade(subjects) {
        let meanGrade = 0;
        for (let i = 0; i < subjects.length; i++) {
            //Take only when passed
            if (subjects[i].passed)
                meanGrade += subjects[i].grade;
        }

        //Round 2 decimals
        return Math.round(meanGrade / subjects.length * 100) / 100;
    }

    static getArrow(mean) {
        if (mean <= 2) {
            return <div className="grade-mean-good"><Icon name="arrow up"/></div>;
        }
        if (mean >= 3) {
            return <div className="grade-mean-bad"><Icon name="arrow down"/></div>;
        }
        return <div className="grade-mean-middle"><Icon name="arrow right"/></div>;
    }

    handleOpen() {
        this.modalOpen = true;
    };

    handleClose() {
        this.modalOpen = false;

    };

    render() {
        return (
            <Grid.Column mobile={16} tablet={16} computer={8}>
                <div className="Card">
                    <div className="Card-header">
                        Notendurchschnitt
                        {GradeMean.getArrow(GradeMean.calculateMeanGrade(this.props.student.subjects))}
                    </div>
                    <div className="Card-content">
                        <h3>
                            {GradeMean.calculateMeanGrade(this.props.student.subjects)}
                            <Icon name="info circle" onClick={this.handleOpen.bind(this)}/>
                        </h3>
                        <Modal basic size='small'
                               open={this.modalOpen}
                               onClose={this.handleClose.bind(this)}>
                            <Header icon='archive' content='Info'/>
                            <Modal.Content>
                                <p>
                                    Der angezeigte Notendurchschnitt dient nur zur Abschätzung der
                                    eigenen Studienlage und kann vom tatsächlichen Wert abweichen. Für
                                    einen offiziellen Notendurchschnitt der u.a. für Auslandsaufenthalte
                                    oder Bewerbungen für ein Masterstudium benötigt wird, wenden Sie
                                    sich bitte an den Studierenden-Service. Dieser Durchschnitt hier
                                    berechnet sich aus der Summe der Noten aller
                                    bestandenen benoteten Prüfungen, mit entsprechender Gewichtung der
                                    Credits und
                                    anschließender Division durch die Anzahl aller bisher erhaltenen
                                    Credits. Keine Modulbetrachtung!
                                </p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='green' inverted onClick={this.handleClose.bind(this)}>
                                    <Icon name='checkmark'/> OK
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </div>
                    <div className="Card-footer">
                        Testphase für Studierende ab 3. Semester
                    </div>
                </div>
            </Grid.Column>
        );
    }
}

export default GradeMean;