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
                    name="aktuelles">
                    {this.activeItem === "aktuelles" ?
                        <Icon className={this.props.mobile ? "active_item_mobile" : "active_item"}/>
                        :
                        <Icon className={this.props.mobile ? "inactive_item_mobile" : "inactive_item"}/>
                    }

                    Aktuelles
                </Menu.Item>
            </Link>,
            <Link key="noten" to="noten" onClick={() => this.updateItem("noten")}>
                <Menu.Item
                    name="noten">
                    {this.activeItem === "noten" ?
                        <Icon className={this.props.mobile ? "active_item_mobile" : "active_item"}/>
                        :
                        <Icon className={this.props.mobile ? "inactive_item_mobile" : "inactive_item"}/>
                    }
                    Noten
                </Menu.Item>
            </Link>,
            <Link key="ects" to="ects" onClick={() => this.updateItem("ects")}>
                <Menu.Item
                    name="ects">
                    {this.activeItem === "ects" ?
                        <Icon className={this.props.mobile ? "active_item_mobile" : "active_item"}/>
                        :
                        <Icon className={this.props.mobile ? "inactive_item_mobile" : "inactive_item"}/>
                    }
                    ECTS
                </Menu.Item>
            </Link>,
            <Link key="downloads" to="downloads" onClick={() => this.updateItem("downloads")}>
                <Menu.Item
                    name="downloads">
                    {this.activeItem === "downloads" ?
                        <Icon className={this.props.mobile ? "active_item_mobile" : "active_item"}/>
                        :
                        <Icon className={this.props.mobile ? "inactive_item_mobile" : "inactive_item"}/>
                    }
                    Downloads
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