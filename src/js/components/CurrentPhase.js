import React from "react";
import {Grid, Icon, Step} from "semantic-ui-react";

export default class CurrentPhase extends React.Component {


    render() {
        return (
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Step.Group stackable='tablet' widths={3}>
                    <Step>
                        <Icon name='glass martini'/>
                        <Step.Content>
                            <Step.Title>Semester</Step.Title>
                            <Step.Description>Choose your shipping options</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active>
                        <Icon name='tasks'/>
                        <Step.Content>
                            <Step.Title>Vorbereitung</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step disabled>
                        <Icon name='edit outline'/>
                        <Step.Content>
                            <Step.Title>Prüfungen</Step.Title>
                            <Step.Description>Verify order details</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </Grid.Column>
        );
    }
}