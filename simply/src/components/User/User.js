import React, { Component } from 'react';
import axios from 'axios';

import UserRecipes from './UserRecipes';
import RecipeForm from './RecipeForm';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    gridList: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '2rem',
    }
};

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    loadCommentsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    handleCommentSubmit(comment) {
        //add POST request
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div style={styles.root}>
                <h2>Comments:</h2>
                <UserRecipes data={this.state.data} />
                <RecipeForm />
            </div>
        )
    }
}
export default User;