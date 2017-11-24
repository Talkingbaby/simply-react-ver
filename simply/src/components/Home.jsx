import React, { Component } from 'react';
import axios from 'axios';

import AppBar from 'material-ui/AppBar';
import AppBarMenu from './AppBarMenu';
import NavDrawer from './NavDrawer';
import Form from './Form';
import Results from './Results';

import User from './User/User';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisineValue: '',
            cookTimeValue: '',
            recipes: [],
            open: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCuisineChange = this.handleCuisineChange.bind(this);
        this.handleCookTimeChange = this.handleCookTimeChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => this.setState({open: false});


    handleCuisineChange = (event, index, value) => this.setState({ cuisineValue: value });
    handleCookTimeChange = (event, index, value) => this.setState({ cookTimeValue: value });

    handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');

        let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${this.state.cuisineValue}&number=50`;

        axios.get(url, {
            headers: { "X-Mashape-Key": "VpQmAeJYO5msh7bVwZT13pUsanqKp1DU33NjsnvQ9KO5VtnlU9" }
        })
        .then((response) => {
            console.log('response: ',response);
            this.setState({recipes: response.data.results});
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <AppBar
                    title="Simply"
                    onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
                    /* iconElementLeft={<AppBarMenu />} */
                />
                <NavDrawer
                    open={this.state.open}
                    handleClose = {this.handleClose}
                />

                <User
                    url={'http://localhost:3001/api/recipes'}
                    /* pollInterval={2000} */
                />
                {/* /* {
                    this.state.recipes.length === 0
                    ?
                    <Form
                        state={this.state}
                        handleCuisineChange={this.handleCuisineChange}
                        handleCookTimeChange={this.handleCookTimeChange}
                        handleSubmit={this.handleSubmit}
                    />
                    :
                    <Results recipes={this.state.recipes}/>
                } */ 
            }
            </div>
        );
    }
}