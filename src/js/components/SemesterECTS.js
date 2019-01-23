import React from "react";
import {Grid, Table} from "semantic-ui-react";

export default class SemesterECTS extends React.Component {

    static calculateECTS(subjects) {
        let meanGrade = 0;
        for (let i = 0; i < subjects.length; i++) {
            //Take only when passed
            if (subjects[i].grade <= 4)
                meanGrade += subjects[i].ects;
        }

        //Round 2 decimals
        return Math.round(meanGrade / subjects.length * 100) / 100;
    }

    render() {

        let sGrades = this.props.grades.map((grade, key) =>
            <Table.Row key={key}>
                <Table.Cell>{grade.name}</Table.Cell>
                <Table.Cell>{grade.ects} ECTS</Table.Cell>
                <Table.Cell>{grade.grade >= 4 ? grade.status : grade.grade}</Table.Cell>
            </Table.Row>
        );

        return (
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <div className="Card">
                    <div className="Card-header">
                        Semester {this.props.semester}
                        <div className="right-aligned">
                            {SemesterECTS.calculateECTS(this.props.grades)} ECTS
                        </div>
                    </div>
                    <div className="Card-content">
                        <Table basic="very" unstackable>
                            <Table.Body>
                                {sGrades}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </Grid.Column>
        );
    }
}