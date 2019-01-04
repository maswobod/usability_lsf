import React from "react";
import {Grid} from "semantic-ui-react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


class ProgressChart extends React.Component {

    render() {
        return (
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <div className="Card">
                    <div className="Card-header">
                        Verlauf
                    </div>
                    <div className="Card-content">
                        <div className="Card-chart">
                            <ResponsiveContainer>
                                <LineChart data={this.props.data}>
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
        );
    }
}

export default ProgressChart;