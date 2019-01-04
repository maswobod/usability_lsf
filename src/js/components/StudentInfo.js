import React from "react";
import {Grid} from "semantic-ui-react";

export default class StudentInfo extends React.Component {


    render() {
        return (
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <div className="Card">
                    <div className="Card-header">
                        {this.props.student.name}
                    </div>
                    <div className="Card-content">
                        <p>
                            Matrikel Nummer: {this.props.student.matrikel_number}
                        </p>
                        <p>
                            Studiengang: {this.props.student.study}
                        </p>
                        <p>
                            Semeseter: {this.props.student.semester}
                        </p>
                    </div>
                    <div className="Card-footer">
                        SPO Verison: {this.props.student.spo_version}
                        <div className="Card-footer-button-right">
                            DOWNLOAD
                        </div>
                    </div>
                </div>
            </Grid.Column>
        );
    }
}