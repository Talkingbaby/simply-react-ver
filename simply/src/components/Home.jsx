import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import { Link } from 'react-router-dom';

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginLeft: '1rem',
        marginRight: '1rem',
    }
};

const cuisine = [
    <MenuItem key={'French'} value={'French'} primaryText="French" />,
    <MenuItem key={'Vegan'} value={'Vegan'} primaryText="Vegan" />,
    <MenuItem key={'Italian'} value={'Italian'} primaryText="Italian" />,
    <MenuItem key={'Japanese'} value={'Japanese'} primaryText="Japanese" />,
];

const cookTime = [
    <MenuItem key={0} value={0} primaryText="0-15 min" />,
    <MenuItem key={15} value={15} primaryText="15-30 min" />,
    <MenuItem key={30} value={30} primaryText="30-45 min" />,
    <MenuItem key={45} value={45} primaryText="45-60 min" />,
    <MenuItem key={60} value={60} primaryText="60+ min" />,
];

export default class Home extends Component {
    state = {
        cuisineValue: null,
        cookTimeValue: null,
    };

    handleCuisineChange = (event, index, value) => this.setState({ cuisineValue: value });
    handleCookTimeChange = (event, index, value) => this.setState({ cookTimeValue: value });

    render() {
        return (
            <div>
                <AppBar
                    title="Simply"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <form style={styles.form}>
                    <SelectField
                        style={styles.input}
                        value={this.state.cuisineValue}
                        onChange={this.handleCuisineChange}
                        floatingLabelText="Cuisine Please"
                    >
                        {cuisine}
                    </SelectField>
                    <SelectField
                        style={styles.input}
                        value={this.state.cookTimeValue}
                        onChange={this.handleCookTimeChange}
                        floatingLabelText="Cooking Time Please"
                    >
                        {cookTime}
                    </SelectField>
                    <Link to="/results">
                        <FlatButton label="Search" primary={true} />
                    </Link>
                    {/* <RaisedButton
                        label="Search"
                        labelPosition="before"
                        primary={true}
                        icon={<FontIcon className="material-icons">kitchen</FontIcon>}
                        style={styles.button}
                    /> */}
                </form>
            </div>
        );
    }
}