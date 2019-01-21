import React from "react";
import {Icon, Menu} from "semantic-ui-react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

@observer
class Navigation extends React.Component {

    @observable activeItem = "aktuelles";
    @observable isMobile = false;


    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
        this.isMobile = window.innerWidth < 768;
    }


    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateItem(name) {
        this.activeItem = name;
    }


    render() {

        let menuItems = [
            <Link key="aktuelles" to="aktuelles" onClick={() => this.updateItem("aktuelles")}>
                <Menu.Item
                    name="aktuelles"
                    active={this.activeItem === "aktuelles"}>
                    {this.activeItem === "aktuelles" ?
                        <Icon name='circle'/>
                        :
                        <Icon name='circle outline'/>
                    }

                    Aktuelles
                </Menu.Item>
            </Link>,
            <Link key="noten" to="noten" onClick={() => this.updateItem("noten")}>
                <Menu.Item
                    name="noten"
                    active={this.activeItem === "noten"}>
                    {this.activeItem === "noten" ?
                        <Icon name='circle'/>
                        :
                        <Icon name='circle outline'/>
                    }
                    Noten
                </Menu.Item>
            </Link>,
            <Link key="ects" to="ects" onClick={() => this.updateItem("ects")}>
                <Menu.Item
                    name="ects"
                    active={this.activeItem === "ects"}>
                    {this.activeItem === "ects" ?
                        <Icon name='circle'/>
                        :
                        <Icon name='circle outline'/>
                    }
                    ECTS
                </Menu.Item>
            </Link>
        ];

        return (
            this.isMobile ?
                <Menu icon='labeled' fixed="bottom">
                    {menuItems}
                </Menu>
                :
                <Menu icon='labeled' vertical className='side-nav'>
                    {menuItems}
                </Menu>
        );
    }
}

export default Navigation;