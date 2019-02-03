import React from "react";
import {Grid, Icon} from "semantic-ui-react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

@observer
class PerformanceOverview extends React.Component {

    @observable
    showingContent = true;

    @observable
    contentWidth = 8;

    toggleContent() {
        this.showingContent = !this.showingContent;
        this.contentWidth = this.contentWidth === 8 ? 16 : 8;
    }


    render() {

        const data = [
            {semester: '1', credits: 30},
            {semester: '2', credits: 35},
            {semester: '3', credits: 20},
            {semester: '4', credits: 40}
        ];

        return (
            <Grid.Column mobile={16} tablet={this.contentWidth} computer={this.contentWidth}>
                <div className="Card">
                    <div className="Card-header" onClick={this.toggleContent.bind(this)}>
                        <Icon name={this.showingContent ? "triangle right" : "triangle down"}/>
                        Leistungsüberblick
                    </div>
                    <div className="Card-content">
                        {this.showingContent ?
                            <Grid className="status-container">
                                <Grid.Column className="status-point">
                                    <div className="primary-status-content status-content">
                                        <h1>
                                            1,9
                                        </h1>
                                        <p>
                                            Notenschnitt
                                        </p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column className="status-point">
                                    <div className="secondary-status-content status-content">
                                        <h1>
                                            120
                                        </h1>
                                        <p>
                                            Erreichte Credits
                                        </p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column className="status-point">
                                    <div className="status-content">
                                        <h1>
                                            250
                                        </h1>
                                        <p>
                                            Benötigte Credits
                                        </p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column className="status-point">
                                    <div className="status-content">
                                        <h1>
                                            0
                                        </h1>
                                        <p>
                                            Angemeldete Prüfungen
                                        </p>
                                    </div>
                                </Grid.Column>
                            </Grid>
                            :
                            <Grid columns={2}>
                                <Grid.Column width={4}>
                                    <div className={"credits-content"}>
                                        <h1>120</h1>
                                        <p>Credits</p>
                                        <h5>Gesamt</h5>
                                        <p>6. Semester</p>
                                        <p>5. Semester</p>
                                        <p>4. Semester</p>
                                        <p>3. Semester</p>
                                        <p>2. Semester</p>
                                        <p>1. Semester</p>
                                    </div>
                                    <br/>
                                    <div className={"grade-content"}>
                                        <h1>1,9</h1>
                                        <p>Notendurchschnitt</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                    <ResponsiveContainer>
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#00c5e3" stopOpacity={0.5}/>
                                                    <stop offset="95%" stopColor="#00c5e3" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="semester" domain={[1, 7]} allowDataOverflow type={"number"}>
                                                <Label position="insideBottomRight">
                                                    Semester
                                                </Label>
                                            </XAxis>
                                            <YAxis label={{ value: 'ECTS', angle: -90, position: 'insideLeft' }}
                                                   domain={[0, 50]} allowDataOverflow type={"number"}/>
                                            <CartesianGrid strokeDasharray="3 3"/>
                                            <Tooltip/>
                                            <Area dataKey="credits" fillOpacity={1}
                                                  fill="url(#colorUv)" stroke="#00c5e3"
                                                  dot={{ stroke: "#00c5e3", strokeWidth: 2 }}/>
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </Grid.Column>
                            </Grid>

                        }

                    </div>
                </div>
            </Grid.Column>
        );
    }
}

export default PerformanceOverview