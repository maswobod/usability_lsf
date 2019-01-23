import React from "react";
import {Grid} from "semantic-ui-react";

export default class MyStatus extends React.Component {


    render() {
        return (
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <div className="Card">
                    <div className="Card-header">
                        Mein Status
                    </div>
                    <div className="Card-content">
                        <Grid className="status-container">
                            <Grid.Column className="status-point">
                                <h1>
                                    1,9
                                </h1>
                                <p>
                                    Notenschnitt
                                </p>
                            </Grid.Column>
                            <Grid.Column className="status-point">
                                <h1>
                                    120
                                </h1>
                                <p>
                                    Erreichte Credits
                                </p>
                            </Grid.Column>
                            <Grid.Column className="status-point inactive-status-point">
                                <h1>
                                    120
                                </h1>
                                <p>
                                    Momentan Erwartet
                                </p>
                            </Grid.Column>
                            <Grid.Column className="status-point inactive-status-point">
                                <h1>
                                    250
                                </h1>
                                <p>
                                    Insgesammt benötigt
                                </p>
                            </Grid.Column>
                            <Grid.Column className="status-point">
                                <h1>
                                    0
                                </h1>
                                <p>
                                    Angemeldete Prüfungen
                                </p>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>
            </Grid.Column>
        );
    }
}