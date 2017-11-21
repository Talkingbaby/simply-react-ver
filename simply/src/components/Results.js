import React, { Component } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    gridList: {
        display: 'flex',
        flexGrow: '1',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};


class Results extends Component {
    render() {

        return (
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={2.2}>
                    {
                        this.props.recipes.map((recipe) => {
                            let baseUri = 'https://spoonacular.com/recipeImages/' + recipe.image;
                            return (
                                <GridTile
                                    key={recipe.id}
                                    title={recipe.title}
                                    actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                    titleStyle={styles.titleStyle}
                                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                >
                                    <img src={baseUri} />
                                </GridTile>
                            );
                        })
                }
                </GridList>
            </div>
        );
    }
}

export default Results;
