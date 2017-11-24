// import React, { Component } from 'react';

// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/RaisedButton';

// const styles = {
//     form: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     input: {
//         marginLeft: '1rem',
//         marginRight: '1rem',
//     }
// };

// const cuisine = [
//     <MenuItem key={'French'} value={'French'} primaryText="French" />,
//     <MenuItem key={'Vegan'} value={'Vegan'} primaryText="Vegan" />,
//     <MenuItem key={'Italian'} value={'Italian'} primaryText="Italian" />,
//     <MenuItem key={'Japanese'} value={'Japanese'} primaryText="Japanese" />,
// ];

// const cookTime = [
//     <MenuItem key={0} value={0} primaryText="0-15 min" />,
//     <MenuItem key={15} value={15} primaryText="15-30 min" />,
//     <MenuItem key={30} value={30} primaryText="30-45 min" />,
//     <MenuItem key={45} value={45} primaryText="45-60 min" />,
//     <MenuItem key={60} value={60} primaryText="60+ min" />,
// ];

// class Form extends Component {
//     render() {        
//         return (
//             <form
//                     style={styles.form}
//                     /* onSubmit={this.handleSubmit} */
//                 >
//                     <SelectField
//                         style={styles.input}
//                         value={this.props.state.cuisineValue}
//                         onChange={this.props.handleCuisineChange}
//                         floatingLabelText="Cuisine Please"
//                     >
//                         {cuisine}
//                     </SelectField>
//                     <SelectField
//                         style={styles.input}
//                         value={this.props.state.cookTimeValue}
//                         onChange={this.props.handleCookTimeChange}
//                         floatingLabelText="Cooking Time Please"
//                     >
//                         {cookTime}
//                     </SelectField>
//                     <FlatButton label="Search" primary={true} onClick={this.props.handleSubmit}/>
//                 </form>
//         );
//     }
// }

// export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Form extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="cuisine">Cuisine</InputLabel>
          <Select
            native
            value={this.props.state.cuisineValue}
            onChange={this.props.handleCuisineChange}
            input={<Input id="cuisine" />} 
          >
            <option value="japanese">Japanese</option>
            <option value="french">French</option>
            <option value="vegan">Vegan</option>
            <option value="italian">Italian</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="cook-time">Cuisine</InputLabel>
          <Select
            native
            value={this.props.state.cookTimeValue}
            onChange={this.props.handleCookTimeChange}
            input={<Input id="cook-time" />}
          >
            <option value={0}>0 - 15 min</option>
            <option value={15}>15 - 30 min</option>
            <option value={30}>30 - 45 min</option>
            <option value={45}>45 - 60 min</option>
            <option value={60}>60+ min</option>
          </Select>
        </FormControl>
        <Button
            color="primary"
            className={classes.button}
            onClick={this.props.handleSubmit}
        >
            Search
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);