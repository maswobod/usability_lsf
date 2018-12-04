import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Grid, Image} from "semantic-ui-react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

class App extends Component {


    render() {

        const data = [
            {semester: '1', ects: 25, pv: 30},
            {semester: '2', ects: 30, pv: 30},
            {semester: '3', ects: 30, pv: 30},
            {semester: '4', ects: 33, pv: 30},
            {semester: '5', ects: 15, pv: 30},
            {semester: '6', ects: 28, pv: 30},
            {semester: '7', ects: 36, pv: 30},
        ];

        return (
            <div className="App">
                <Grid columns={3} divided>

                    <Grid.Row>
                        <Grid.Column className="Show-cell">
                            <ResponsiveContainer>
                                <LineChart data={data}>
                                    <Line type="monotone" dataKey="ects" stroke="#8884d8"/>
                                    <Line type="monotone" dataKey="pv" stroke="#d32f2f"/>
                                    <Tooltip/>
                                    <XAxis dataKey="semester"/>
                                    <YAxis/>
                                </LineChart>
                            </ResponsiveContainer>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png'/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;
