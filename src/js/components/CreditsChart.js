import React from "react";
import {Grid} from "semantic-ui-react";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

class CreditsChart extends React.Component {

    static calculateCredits(subjects) {
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

        const credits = CreditsChart.calculateCredits(this.props.student.subjects);
        const COLORS = ['#76FF03', '#FF3D00'];

        return (
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
                                            this.props.data.map((entry, index) => <Cell
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
        );
    }
}

export default  CreditsChart;