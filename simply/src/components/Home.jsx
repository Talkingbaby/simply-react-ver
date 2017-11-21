import React, { Component } from 'react';
import axios from 'axios';

import AppBar from 'material-ui/AppBar';
import Form from './Form';
import Results from './Results';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisineValue: '',
            cookTimeValue: '',
            recipes: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCuisineChange = this.handleCuisineChange.bind(this);
        this.handleCookTimeChange = this.handleCookTimeChange.bind(this);
    }


    handleCuisineChange = (event, index, value) => this.setState({ cuisineValue: value });
    handleCookTimeChange = (event, index, value) => this.setState({ cookTimeValue: value });

    handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');

        let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${this.state.cuisineValue}&number=100`;

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
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                {
                    this.state.recipes.length === 0
                    ?
                    <Form
                        state={this.state}
                        handleCuisineChange={this.handleCuisineChange}
                        handleCookTimeChange={this.handleCookTimeChange}
                        handleSubmit={this.handleSubmit}
                    />
                    :
                    <Results />
                }
            </div>
        );
    }
}