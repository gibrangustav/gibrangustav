import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});
function getItems() {
    var json = {
        list: [

        	{
                id: 1,
                items: [
                    {
                        id: 1,
                        name: "UI UX",
                        subitems: [
                            {
                                id: 1,
                                name: "Figma"
                            },
                            {
                                id: 2,
                                name: "Adobe XD"
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                items: [
                    {
                        id: 2,
                        name: "Front End",
                        subitems: [
                            {
                                id: 1,
                                name: "React JS"
                            },
                            {
                                id: 2,
                                name: "React Native"
                            }
                        ]
                    },
                ]
            },
            {
                id: 3,
                items: [
                    {
                        id: 3,
                        name: "Back End",
                        subitems: [
                            {
                                id: 1,
                                name: "Lumen"
                            },
                            {
                                id: 2,
                                name: "Adonis JS"
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                items: [
                    {
                        id: 4,
                        name: "Server",
                        subitems: [
                            {
                                id: 1,
                                name: "Hosting"
                            },
                            {
                                id: 2,
                                name: "Domain"
                            }
                        ]
                    }
                ]
            },
	        {
	            id: 5,
	            items: [
	                {
	                    id: 5,
	                    name: "Career",
	                    subitems: [
	                        {
	                            id: 1,
	                            name: "Dalam Negeri"
	                        },
	                        {
	                            id: 2,
	                            name: "Luar Negeri"
	                        }
	                    ]
	                }
	            ]
	        },
	        {
	            id: 6,
	            items: [
	                {
	                    id: 6,
	                    name: "Biografi",
	                    subitems: [
	                        {
	                            id: 1,
	                            name: "Mark Zuckerberg"
	                        },
	                        {
	                            id: 2,
	                            name: "Bill Gates"
	                        }
	                    ]
	                }
	            ]
	        },
        ]
    };
    return json;
}
class NestedList extends React.Component {
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = getItems();
        const { classes } = this.props;
        return (
            <div>
                {items.list.map(list => {
                    return (
                        <List
                            className={classes.root}
                            key={list.id}
                            subheader={
                                <ListSubheader>{list.title}</ListSubheader>
                            }
                        >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                <ListItem
                                                    button
                                                    key={item.id}
                                                    onClick={this.handleClick.bind(
                                                        this,
                                                        item.name
                                                    )}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                    {this.state[item.name] ? (
                                                        <ExpandLess />
                                                    ) : (
                                                        <ExpandMore />
                                                    )}
                                                </ListItem>
                                                <Collapse
                                                    key={list.items.id}
                                                    component="li"
                                                    in={this.state[item.name]}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >
                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    <ListItem
                                                                        button
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                        className={
                                                                            classes.nested
                                                                        }
                                                                    >
                                                                        <ListItemText
                                                                            key={
                                                                                sitem.id
                                                                            }
                                                                            primary={
                                                                                sitem.name
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            <ListItem
                                                button
                                                onClick={this.handleClick.bind(
                                                    this,
                                                    item.name
                                                )}
                                                key={item.id}
                                            >
                                                <ListItemText
                                                    primary={item.name}
                                                />
                                            </ListItem>
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>
                    );
                })}
            </div>
        );
    }
}
NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NestedList);
