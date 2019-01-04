import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../stylesheets/App.css';
import {Accordion, Button, Grid, Header, Icon, Modal, Table} from "semantic-ui-react";
import {Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class App extends Component {

    @observable activeIndex = 0;
    @observable data = [];
    @observable student = {};
    @observable study = [];
    @observable modalOpen = false;
    @observable legendModalOpen = false;


    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;


            this.activeIndex = newIndex

    };

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
        this.study = [
            {
                semester: 1,
                ects: 5,
                name: "Grundlagen Gestaltung",
                number: 1
            }, {
                semester: 1,
                ects: 5,
                name: "Fotografieren",
                number: 2
            }, {
                semester: 1,
                ects: 5,
                name: "Interaction Design",
                number: 3
            }, {
                semester: 1,
                ects: 5,
                name: "Lineare Algebra",
                number: 4
            }, {
                semester: 1,
                ects: 10,
                name: "Programmieren 1",
                number: 5
            }, {
                semester: 2,
                ects: 10,
                name: "User Experience Design",
                number: 6
            }, {
                semester: 2,
                ects: 10,
                name: "Motion Design",
                number: 7
            }, {
                semester: 2,
                ects: 5,
                name: "Programmieren 2",
                number: 8
            }, {
                semester: 2,
                ects: 5,
                name: "Mathematik für Designer",
                number: 9
            }, {
                semester: 3,
                ects: 10,
                name: "Animation",
                number: 10
            }, {
                semester: 3,
                ects: 5,
                name: "Film",
                number: 11
            }, {
                semester: 3,
                ects: 5,
                name: "Phisical Computing",
                number: 12
            }, {
                semester: 3,
                ects: 5,
                name: "Webentwicklung 1",
                number: 13
            }, {
                semester: 3,
                ects: 5,
                name: "Software Engineering",
                number: 14
            }, {
                semester: 4,
                ects: 10,
                name: "Projekt 1",
                number: 15
            }, {
                semester: 4,
                ects: 5,
                name: "Computer Grafik",
                number: 16
            }, {
                semester: 4,
                ects: 5,
                name: "Professional English",
                number: 17
            }, {
                semester: 4,
                ects: 5,
                name: "Webentwicklung",
                number: 18
            }, {
                semester: 5,
                ects: 30,
                name: "Praxissemester",
                number: 19
            }, {
                semester: 6,
                ects: 15,
                name: "Projekt 2",
                number: 20
            }, {
                semester: 6,
                ects: 5,
                name: "Game Design",
                number: 21
            }, {
                semester: 6,
                ects: 5,
                name: "Spiele Entwicklung",
                number: 22
            }, {
                semester: 6,
                ects: 5,
                name: "Mobile Anwendungen",
                number: 23
            },
            {
                semester: 7,
                ects: 15,
                name: "Bachelor Arbeit",
                number: 24
            },

        ];

        this.data = this.calculateProgressChart(this.student);

    };

    calculateProgressChart(student) {
        let data = [];

        for (let i = 1; i < student.semester; i++) {
            data.push({semester: i, ects: 0, target: 30});
        }

        for (let i = 0; i < student.subjects.length; i++) {
            let subject = student.subjects[i];

            if (subject.passed)
                data[subject.semester - 1].ects += subject.ects;
        }

        return data;
    }

    getSemesterSubjects(semester) {
        let tablerows = [];

        let {study} = this.state;
        for (let i = 0; i < study.length; i++) {
            let subject = study[i];
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

    getExtraSubjects() {
        let tablerows = [];
        for (let i = 0; i < this.state.student.subjects.length; i++) {
            if (this.isExtraSubject(this.state.student.subjects[i].number)) {
                let studenSubject = this.state.student.subjects[i];
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
        for (let i = 0; i < this.state.study.length; i++) {
            if (this.state.study[i].number === subjectNumber) {
                return false;
            }
        }
        return true;
    }

    getStudentSubjectByNumber(subjectNumber) {
        for (let i = 0; i < this.state.student.subjects.length; i++) {
            if (this.state.student.subjects[i].number === subjectNumber) {
                return this.state.student.subjects[i];
            }
        }
        return null;
    }

    calculateMeanGrade(subjects) {
        let meanGrade = 0;
        for (let i = 0; i < subjects.length; i++) {
            //Take only when passed
            if (subjects[i].passed)
                meanGrade += subjects[i].grade;
        }

        //Round 2 decimals
        return Math.round(meanGrade / subjects.length * 100) / 100;
    }

    getArrow(mean) {
        if (mean <= 2) {
            return <div className="grade-mean-good"><Icon name="arrow up"/></div>;
        }
        if (mean >= 3) {
            return <div className="grade-mean-bad"><Icon name="arrow down"/></div>;
        }
        return <div className="grade-mean-middle"><Icon name="arrow right"/></div>;
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

    legendHandleClose() {
        this.setState({
            ...this.state,
            legendModalOpen: false
        })
    }

    legendHandleOpen() {
        this.setState({
            ...this.state,
            legendModalOpen: true
        })
    }

    calculateCredits(subjects) {
        let credits = 0;
        for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].passed)
                credits += subjects[i].ects;
        }

        let left = 210;
        if (credits < 210) {
            left -= credits;
        } else {
            left = 0;
        }
        return [{name: 'Erreicht', value: credits},
            {name: 'Fehlen', value: left}];
    }

    render() {

        const {activeIndex, student, data} = this.state;

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

        const credits = this.calculateCredits(student.subjects);
        const COLORS = ['#76FF03', '#FF3D00'];

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

                    <Grid.Column mobile={16} tablet={16} computer={8}>
                        <div className="Card">
                            <div className="Card-header">
                                Notendurchschnitt
                                {this.getArrow(this.calculateMeanGrade(student.subjects))}
                            </div>
                            <div className="Card-content">
                                <h3>
                                    {this.calculateMeanGrade(student.subjects)}
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

                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <div className="Card">
                            <div className="Card-header">
                                Credits
                            </div>
                            <div className="Card-content">
                                <div className="Card-chart">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={credits}
                                                 innerRadius={50}
                                                 outerRadius={80}
                                                 fill="#8884d8">
                                                {
                                                    data.map((entry, index) => <Cell
                                                        fill={COLORS[index % COLORS.length]}/>)
                                                }
                                            </Pie>
                                            <Tooltip/>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="Card-footer">
                                Angaben ohne Gewehr
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
                                            <Line type="monotone" dataKey="target" stroke="#d32f2f"/>
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
                                <Icon name="info circle" size="small" onClick={this.legendHandleOpen.bind(this)}/>
                                <Modal basic size='small'
                                       open={this.state.legendModalOpen}
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
                                        <Grid>
                                            {haumstudium}
                                        </Grid>
                                    </Accordion.Content>

                                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                        Wahlfächer
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 2}>
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
