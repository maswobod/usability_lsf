import React from "react";
import {Checkbox, Grid, Icon} from "semantic-ui-react";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class Todos extends React.Component {

    @observable
    todos = [
        {
            title: "Rückmelden",
            text: "bis zum 01.01.2019",
            checked: false
        },
        {
            title: "Prüfungen anmelden",
            text: "bis zum 03.01.2019",
            checked: false
        },
        {
            title: "Kurse belegen",
            text: "bis zum 05.01.2019",
            checked: true
        }
    ];

    @observable
    showingContent = true;

    todoChecked(index) {
        this.todos[index].checked = true;
    }

    isUncheckedTodos() {
        for (let i = 0; i < this.todos.length; i++) {
            if (!this.todos[i].checked) {
                return true;
            }
        }
        return false;
    }

    toggleContent() {
        this.showingContent = !this.showingContent;
    }


    render() {

        let showTodos = this.todos.map((todo, index) =>
            <Grid.Row key={index} >

                <Grid.Column floated='left' width={10}>
                    <div className={"todo-text"}>
                        <h3>{todo.title}</h3>
                        <p>{todo.text}</p>
                    </div>
                </Grid.Column>
                <Grid.Column floated='right' width={5}>
                    <label className="container">
                        <input type="checkbox"/>
                        <span className="checkmark"/>
                    </label>
                </Grid.Column>

            </Grid.Row>
        );
        return (
            <Grid.Column mobile={16} tablet={8} computer={8} className={this.isUncheckedTodos() ? "" : "hidden"}>
                <div className={"Card"}>
                    <div className="Card-header" onClick={this.toggleContent.bind(this)}>
                        <Icon name={this.showingContent ? "triangle down" : "triangle right"}/>
                        Todos
                    </div>
                    {this.showingContent ?
                        <div className="Card-content">
                            <Grid>
                                {showTodos}
                            </Grid>
                        </div>
                        :
                        ""
                    }
                </div>
            </Grid.Column>
        );
    }
}

export default Todos