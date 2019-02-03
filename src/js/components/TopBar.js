import React from "react";
import {Grid, Image, Segment} from "semantic-ui-react";

export default class StudentInfo extends React.Component {


    render() {
        return (
            <Grid.Column mobile={16} tablet={16} computer={16} className={"top-bar-content"}>
                <Segment>
                    <Grid width={16} >
                        <Grid.Column width={1} className={"top-bar-column"}>
                            <Image src='http://www.hs-weingarten.de/~woellhaf/studenten/baumann/bilder/fh_logo.jpg'
                                   className={"top-bar-image"} circular/>
                        </Grid.Column>
                        <Grid.Column width={10} className={"top-bar-column"}>
                            <p className={"hello_text"}>
                                Willkommen, {(this.props.student.name).substr(0, this.props.student.name.lastIndexOf(" "))}
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5} className={"top-bar-column"}>
                            <p className={"info_text"}>
                                {this.props.student.semester}. Semester
                                M.Nr: {this.props.student.matrikel_number}
                            </p>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Grid.Column>
        );
    }
}