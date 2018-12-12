import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Accordion, Button, Grid, Header, Icon, Modal, Table} from "semantic-ui-react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

class App extends Component {

    state = {
        activeIndex: 0,
        data: [],
        student: {},
        modalOpen: false
    };

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({
            ...this.state,
            activeIndex: newIndex
        })
    };

    componentDidMount() {


        this.setState({
            ...this.state,
            student: {
                name: "Melanie Mustermwd",
                matrikel_number: "293209",
                semester: 6,
                study: "Angewandte Klukologie",
                spo_version: "SPO 11.22A",
                subjects: [
                    {
                        name: "Mathe 1",
                        semester: 1,
                        ects: 5,
                        note: 2.6,
                        number: 234912,
                        passed: true
                    }, {
                        name: "Programmieren",
                        semester: 1,
                        ects: 5,
                        note: 1.4,
                        number: 234912,
                        passed: true
                    }, {
                        name: "Webdesign",
                        semester: 1,
                        ects: 3,
                        note: 1.6,
                        number: 234912,
                        passed: true
                    }, {
                        name: "Internet",
                        semester: 1,
                        ects: 5,
                        note: 4.6,
                        number: 234912,
                        passed: false
                    },
                ]
            },
            data: [
                {semester: '1', ects: 25, pv: 30},
                {semester: '2', ects: 30, pv: 30},
                {semester: '3', ects: 30, pv: 30},
                {semester: '4', ects: 33, pv: 30},
                {semester: '5', ects: 15, pv: 30},
                {semester: '6', ects: 28, pv: 30},
                {semester: '7', ects: 36, pv: 30},
            ]

        });
    }

    handleOpen() {
        this.setState({
            ...this.state,
            modalOpen: true
        })
    };

    handleClose() {
        this.setState({
            ...this.state,
            modalOpen: false
        })
    };

    render() {

        const {activeIndex, student, data} = this.state;

        const grundstudium =[
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
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
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
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
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
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>
            ]
        ;

        return (
            <div className="app-container">
                <Grid className="App-content">
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <div className="Card">
                            <div className="Card-header">
                                {student.name}
                            </div>
                            <div className="Card-content">
                                <p>
                                    Matrikel Nummer: {student.matrikel_number}
                                </p>
                                <p>
                                    Studiengang: {student.study}
                                </p>
                                <p>
                                    Semeseter: {student.semester}
                                </p>
                            </div>
                            <div className="Card-footer">
                                SPO Verison: {student.spo_version}
                                <div className="Card-footer-button-right">
                                    DOWNLOAD
                                </div>
                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <div className="Card">
                            <div className="Card-header">
                                Verlauf
                            </div>
                            <div className="Card-content">
                                <div className="Card-chart">
                                    <ResponsiveContainer>
                                        <LineChart data={data}>
                                            <Line type="monotone" dataKey="ects" stroke="#8884d8"/>
                                            <Line type="monotone" dataKey="pv" stroke="#d32f2f"/>
                                            <Tooltip/>
                                            <XAxis dataKey="semester"/>
                                            <YAxis/>
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="Card-footer">
                                Angaben ohne Gewehr
                            </div>
                        </div>

                    </Grid.Column>


                    <Grid.Column width={16}>
                        <div className="Card">
                            <div className="Card-header">
                                Noten
                            </div>
                            <div className="Card-content">
                                <Accordion className="wide-accordion">
                                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                        Grundstudium
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 0}>
                                        <Grid>
                                            {grundstudium}
                                        </Grid>

                                    </Accordion.Content>

                                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                        Hauptstudium
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 1}>
                                        <p>
                                            There are many breeds of dogs. Each breed varies in size and temperament.
                                            Owners
                                            often
                                            select a breed of dog that they find to be compatible with their own
                                            lifestyle
                                            and
                                            desires from a companion.
                                        </p>
                                    </Accordion.Content>

                                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                        Wahlfächer
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 2}>
                                        <p>
                                            Three common ways for a prospective owner to acquire a dog is from pet
                                            shops,
                                            private
                                            owners, or shelters.
                                        </p>
                                        <p>
                                            A pet shop may be the most convenient way to buy a dog. Buying a dog from a
                                            private
                                            owner allows you to assess the pedigree and upbringing of your dog before
                                            choosing
                                            to
                                            take it home. Lastly, finding your dog from a shelter, helps give a good
                                            home to
                                            a
                                            dog
                                            who may not find one so readily.
                                        </p>
                                    </Accordion.Content>
                                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                                        Zusatzfächer
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 3}>
                                        <p>
                                            Three common ways for a prospective owner to acquire a dog is from pet
                                            shops,
                                            private
                                            owners, or shelters.
                                        </p>
                                        <p>
                                            A pet shop may be the most convenient way to buy a dog. Buying a dog from a
                                            private
                                            owner allows you to assess the pedigree and upbringing of your dog before
                                            choosing
                                            to
                                            take it home. Lastly, finding your dog from a shelter, helps give a good
                                            home to
                                            a
                                            dog
                                            who may not find one so readily.
                                        </p>
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


                    <Grid.Column mobile={16} tablet={16} computer={8}>
                        <div className="Card">
                            <div className="Card-header">
                                Notendurchschnitt
                                <div className="grade-mean">
                                    <Icon name="arrow up"/>
                                </div>
                            </div>
                            <div className="Card-content">
                                <h3>
                                    1.75
                                    <Icon name="info circle" onClick={this.handleOpen.bind(this)}/>
                                </h3>
                                <Modal basic size='small'
                                       open={this.state.modalOpen}
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
                                            <Icon name='checkmark'/> Yes
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                            </div>
                            <div className="Card-footer">
                                Testphase für Studierende ab 3. Semester
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className="Card">
                            <div className="Card-header">
                                Legende
                            </div>
                            <div className="Card-content">
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
                            </div>

                        </div>
                    </Grid.Column>


                </Grid>
                <footer className="App-bottom-bar">
                    <p>
                        Copyright HS-Weingarten
                    </p>

                </footer>
            </div>
        );
    }
}

export default App;
