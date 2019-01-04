import React from "react";
import {Accordion, Button, Grid, Header, Icon, Modal, Table} from "semantic-ui-react";
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer
class Grades extends React.Component {

    @observable activeIndex = 0;
    @observable legendModalOpen = false;


    handleClick = (e, titleProps) => {
        const {index} = titleProps;

        const newIndex = this.activeIndex === index ? -1 : index;

        this.activeIndex = newIndex

    };

    legendHandleClose() {
        this.legendModalOpen = false;
    }

    legendHandleOpen() {
        this.legendModalOpen = true;
    }

    getSemesterSubjects(semester) {
        let tablerows = [];

        for (let i = 0; i < this.props.study.length; i++) {
            let subject = this.props.study[i];
            if (subject.semester === semester) {
                let studenSubject = this.getStudentSubjectByNumber(subject.number);
                let grade = "-";
                let status = "NA";
                if (studenSubject != null) {
                    grade = studenSubject.grade;
                    if (studenSubject.passed) {
                        status = "BE";
                    } else {
                        status = "NB";
                    }
                }

                tablerows.push(
                    <Table.Row>
                        <Table.Cell>{subject.name}</Table.Cell>
                        <Table.Cell>{subject.ects}</Table.Cell>
                        <Table.Cell>{grade}</Table.Cell>
                        <Table.Cell>{status}</Table.Cell>
                    </Table.Row>
                );
            }
        }

        return tablerows;
    }

    getStudentSubjectByNumber(subjectNumber) {
        for (let i = 0; i < this.props.student.subjects.length; i++) {
            if (this.props.student.subjects[i].number === subjectNumber) {
                return this.props.student.subjects[i];
            }
        }
        return null;
    }

    getExtraSubjects() {
        let tablerows = [];
        for (let i = 0; i < this.props.student.subjects.length; i++) {
            if (this.isExtraSubject(this.props.student.subjects[i].number)) {
                let studenSubject = this.props.student.subjects[i];
                let grade = "-";
                let status = "NA";
                if (studenSubject != null) {
                    grade = studenSubject.grade;
                    if (studenSubject.passed) {
                        status = "BE";
                    } else {
                        status = "NB";
                    }
                }

                tablerows.push(
                    <Table.Row>
                        <Table.Cell>{studenSubject.name}</Table.Cell>
                        <Table.Cell>{studenSubject.ects}</Table.Cell>
                        <Table.Cell>{grade}</Table.Cell>
                        <Table.Cell>{status}</Table.Cell>
                    </Table.Row>
                );
            }
        }
        return tablerows;
    }

    isExtraSubject(subjectNumber) {
        for (let i = 0; i < this.props.study.length; i++) {
            if (this.props.study[i].number === subjectNumber) {
                return false;
            }
        }
        return true;
    }

    render() {
        const grundstudium = [
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>1. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.getSemesterSubjects(1)}
                    </Table.Body>
                </Table>
            </Grid.Column>,
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>2. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.getSemesterSubjects(2)}
                    </Table.Body>
                </Table>
            </Grid.Column>,
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>3. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.getSemesterSubjects(3)}
                    </Table.Body>
                </Table>
            </Grid.Column>
        ];

        const haumstudium = [
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>4. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.getSemesterSubjects(4)}
                    </Table.Body>
                </Table>
            </Grid.Column>,
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>5. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Body>
                            {this.getSemesterSubjects(5)}
                        </Table.Body>
                    </Table.Body>
                </Table>
            </Grid.Column>,
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>6. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.getSemesterSubjects(6)}
                    </Table.Body>
                </Table>
            </Grid.Column>,
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>7. Semester</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ECTS</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.getSemesterSubjects(7)}
                    </Table.Body>
                </Table>
            </Grid.Column>
        ];
        return (
            <Grid.Column width={16}>
                <div className="Card">
                    <div className="Card-header">
                        Noten
                        <Icon name="info circle" size="small" onClick={this.legendHandleOpen.bind(this)}/>
                        <Modal basic size='small'
                               open={this.legendModalOpen}
                               onClose={this.legendHandleClose.bind(this)}>
                            <Header icon='archive' content='Legende'/>
                            <Modal.Content>
                                <p>
                                    NA: Nicht angemeldet
                                </p>
                                <p>
                                    AN: angemeldet
                                </p>
                                <p>
                                    BE: bestanden
                                </p>
                                <p>
                                    NB: nicht bestanden
                                </p>
                                <p>
                                    EN: endgültig nicht bestanden
                                </p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='green' inverted onClick={this.legendHandleClose.bind(this)}>
                                    <Icon name='checkmark'/> OK
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </div>
                    <div className="Card-content">
                        <Accordion className="wide-accordion" styled>
                            <Accordion.Title active={this.activeIndex === 0} index={0} onClick={this.handleClick}>
                                Grundstudium
                            </Accordion.Title>
                            <Accordion.Content active={this.activeIndex === 0}>
                                <Grid>
                                    {grundstudium}
                                </Grid>

                            </Accordion.Content>

                            <Accordion.Title active={this.activeIndex === 1} index={1} onClick={this.handleClick}>
                                Hauptstudium
                            </Accordion.Title>
                            <Accordion.Content active={this.activeIndex === 1}>
                                <Grid>
                                    {haumstudium}
                                </Grid>
                            </Accordion.Content>

                            <Accordion.Title active={this.activeIndex === 2} index={2} onClick={this.handleClick}>
                                Wahlfächer
                            </Accordion.Title>
                            <Accordion.Content active={this.activeIndex === 2}>
                                <Grid>
                                    <Grid.Column mobile={16} tablet={8} computer={8}>
                                        <Table celled>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell colSpan='4'>Wahlfächer</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                                    <Table.HeaderCell>ECTS</Table.HeaderCell>
                                                    <Table.HeaderCell>Note</Table.HeaderCell>
                                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>

                                            <Table.Body>
                                                {this.getExtraSubjects()}
                                            </Table.Body>
                                        </Table>
                                    </Grid.Column>
                                </Grid>
                            </Accordion.Content>
                        </Accordion>
                    </div>
                    <div className="Card-footer">
                        Angaben ohne Gewehr
                        <div className="Card-footer-button-right">
                            DOWNLOAD
                        </div>
                    </div>
                </div>
            </Grid.Column>
        );
    }
}

export default Grades;