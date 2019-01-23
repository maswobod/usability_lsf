import React from "react";
import {Grid} from "semantic-ui-react";
import {observable} from "mobx";
import StudentInfo from "../components/StudentInfo";
import GradeMean from "../components/GradeMean";
import CreditsChart from "../components/CreditsChart";
import ProgressChart from "../components/ProgressChart";
import {observer} from "mobx-react";
import CurrentPhase from "../components/CurrentPhase";
import Todos from "../components/Todos";

@observer
class Aktuelles extends React.Component {

    @observable data = [];
    @observable student = {};
    @observable study = [];

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

    render() {

        return (
            <div className="app-container">
                <Grid className="App-content">
                    <StudentInfo student={this.student}/>
                    <Todos/>
                    <CurrentPhase/>
                    <GradeMean student={this.student}/>
                    <CreditsChart data={this.data} student={this.student}/>
                    <ProgressChart data={this.data}/>

                </Grid>
            </div>
        );
    }
}

export default Aktuelles