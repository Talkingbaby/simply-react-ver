import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/RaisedButton';

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

class Form extends Component {
    render() {        
        return (
            <form
                    style={styles.form}
                    /* onSubmit={this.handleSubmit} */
                >
                    <SelectField
                        style={styles.input}
                        value={this.props.state.cuisineValue}
                        onChange={this.props.handleCuisineChange}
                        floatingLabelText="Cuisine Please"
                    >
                        {cuisine}
                    </SelectField>
                    <SelectField
                        style={styles.input}
                        value={this.props.state.cookTimeValue}
                        onChange={this.props.handleCookTimeChange}
                        floatingLabelText="Cooking Time Please"
                    >
                        {cookTime}
                    </SelectField>
                    <FlatButton label="Search" primary={true} onClick={this.props.handleSubmit}/>
                </form>
        );
    }
}

export default Form;